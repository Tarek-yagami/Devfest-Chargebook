from flask import Flask, jsonify, request
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import PolynomialFeatures
from sklearn.model_selection import train_test_split
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

@app.route('/')
def index():
    return "Welcome to the FinTrack API. Use the endpoints /api/total-expenses, /api/insights, and /api/predict-expenses."

# Read and prepare the data
df = pd.read_csv("./data/apple_income_statement.csv")
df.rename(columns={'Unnamed: 0': 'Metric'}, inplace=True)
df.iloc[:, 1:] = df.iloc[:, 1:].apply(pd.to_numeric, errors='coerce')
df.set_index('Metric', inplace=True)

# Define the liability metrics
liability_metrics = [
    "Total Current Liabilities", 
    "Long Term Debt", 
    "Total Long Term Debt", 
    "Total Debt", 
    "Total Liabilities"
]

# Endpoint to provide spending insights
@app.route('/api/insights', methods=['GET'])
def get_insights():
    total_expenses = df.loc[liability_metrics].sum()
    expense_growth_rate = total_expenses.pct_change() * 100

    recommendations = []
    threshold = 15000
    warning_threshold = 5000

    if expense_growth_rate.mean() > 5:
        recommendations.append("Expenses are growing at an average rate above 5%. Consider cost-cutting strategies in high-growth areas.")

    if df.loc["Long Term Debt"].mean() > threshold:
        recommendations.append("Long term debt is consistently high. Focus on reducing debt burden.")

    if df.loc["Other Current liabilities, Total"].max() > warning_threshold:
        recommendations.append("Other current liabilities have exceeded the warning threshold. Consider measures to manage these liabilities.")

    if not recommendations:
        recommendations.append("Everything looks good! No critical issues detected.")

    # Create liabilities data for chart
    liabilities_data = {metric: df.loc[metric].to_dict() for metric in liability_metrics}

    # Add breakdown of liabilities for the bar chart
    breakdown_liabilities = df.loc[liability_metrics].T.to_dict(orient='records')
    
    return jsonify({
        "total_expenses": total_expenses.to_dict(),
        "growth_rate": expense_growth_rate.dropna().to_dict(),
        "recommendations": recommendations,
        "liabilities": liabilities_data,
        "breakdown_liabilities": breakdown_liabilities  # Add this line
    })

# Endpoint to predict future expenses
@app.route('/api/predict-expenses', methods=['POST'])
def predict_expenses():
    total_expenses = df.loc[liability_metrics].sum()
    years = np.array(range(len(total_expenses))).reshape(-1, 1)
    expenses = total_expenses.values.reshape(-1, 1)

    X_train, X_test, y_train, y_test = train_test_split(years, expenses, test_size=0.3, random_state=42)

    degree = 2
    poly = PolynomialFeatures(degree=degree)
    X_train_poly = poly.fit_transform(X_train)

    model = LinearRegression()
    model.fit(X_train_poly, y_train)

    data = request.get_json()
    num_years = int(data.get('num_years', 1))  # Convert to integer

    future_years = np.array([[len(total_expenses) + i] for i in range(num_years)])  # Correctly defined the array
    future_years_poly = poly.transform(future_years)
    predicted_expenses = model.predict(future_years_poly)

    future_predictions = {str(len(total_expenses) + i): float(predicted_expenses[i]) for i in range(num_years)}
    return jsonify(future_predictions)
# Load data with the appropriate header
csv_file = "./data/apple_income_statement.csv"
data = pd.read_csv(csv_file)  # Use the first row as headers

# Transpose the DataFrame
transposed_data = data.T

# Rename the first column to "Date"
transposed_data.columns = transposed_data.iloc[0]  # Set the first row as the new header
transposed_data = transposed_data[1:]  # Remove the first row

# Reset index to make "Date" a column
transposed_data.reset_index(inplace=True)
transposed_data.rename(columns={'index': 'Date'}, inplace=True)

# Print the transposed DataFrame's columns
print("Columns in the transposed DataFrame:")
print(transposed_data.columns.tolist())  # List the columns after transposing

# Convert 'Date' to datetime to extract year for filtering
transposed_data['Date'] = pd.to_datetime(transposed_data['Date'])
transposed_data['Year'] = transposed_data['Date'].dt.year  # Extract the year for filtering

# Helper function to filter data by year range
def filter_data_by_years(start_year, end_year):
    # Filter by year range
    filtered_data = transposed_data[transposed_data['Year'].between(start_year, end_year)]
    return filtered_data

@app.route('/balance-sheet', methods=['GET'])
def generate_balance_sheet():
    start_year = int(request.args.get('start_year'))
    end_year = int(request.args.get('end_year'))

    # Filter data for the selected years
    balance_sheet_data = filter_data_by_years(start_year, end_year)

    # Generate a balance sheet response with dates
    assets = []
    liabilities = []
    equity = []

    for _, row in balance_sheet_data.iterrows():
        assets.append({
            "Date": row['Date'].strftime('%Y-%m-%d'),
            "Cash": row['Cash'],
            "Cash & Equivalents": row['Cash & Equivalents'],
            "Short Term Investments": row['Short Term Investments'],
            "Accounts Receivable - Trade, Net": row['Accounts Receivable - Trade, Net'],
            "Total Inventory": row['Total Inventory'],
            "Total Assets": row['Total Assets'],
        })

        liabilities.append({
            "Date": row['Date'].strftime('%Y-%m-%d'),
            "Accounts Payable": row['Accounts Payable'],
            "Notes Payable/Short Term Debt": row['Notes Payable/Short Term Debt'],
            "Current Portion of LT Debt": row['Current Port. of  LT Debt/Capital Leases'],
            "Total Liabilities": row['Total Liabilities'],
        })
        
        equity.append({
            "Date": row['Date'].strftime('%Y-%m-%d'),
            "Total Equity": row['Total Equity'],
        })

    # Calculate the total assets and liabilities for final result
    total_assets = sum([row['Total Assets'] for _, row in balance_sheet_data.iterrows()])
    total_liabilities = sum([row['Total Liabilities'] for _, row in balance_sheet_data.iterrows()])
    total_equity = total_assets - total_liabilities

    response = {
        "Assets": assets,
        "Liabilities": liabilities,
        "Equity": equity,
        "Total Assets": total_assets,
        "Total Liabilities": total_liabilities,
        "Total Equity": total_equity
    }
    
    return jsonify(response)


if __name__ == '__main__':
    app.run(debug=True)
