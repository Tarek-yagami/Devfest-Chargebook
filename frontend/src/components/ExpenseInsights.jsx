import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { Card, Button, Input, Alert, Col, Row, Menu, Spin } from 'antd';
import { InfoCircleOutlined, WalletOutlined, LineChartOutlined } from '@ant-design/icons';
import './ExpenseInsights.css'; // Custom CSS for styling

const ExpenseInsights = () => {
  const [totalExpenses, setTotalExpenses] = useState({});
  const [growthRate, setGrowthRate] = useState({});
  const [recommendations, setRecommendations] = useState([]);
  const [liabilities, setLiabilities] = useState({});
  const [numYears, setNumYears] = useState(1);
  const [predictions, setPredictions] = useState({});
  const [breakdownLiabilities, setBreakdownLiabilities] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [activeKey, setActiveKey] = useState('insights'); // State to track active menu item

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/insights');
        setTotalExpenses(response.data.total_expenses);
        setGrowthRate(response.data.growth_rate);
        setRecommendations(response.data.recommendations);
        setLiabilities(response.data.liabilities);
        setBreakdownLiabilities(response.data.breakdown_liabilities);
      } catch (error) {
        console.error('Error fetching insights:', error);
      } finally {
        setLoading(false); // Set loading to false after data fetch
      }
    };

    fetchInsights();
  }, []);

  const generateChartData = (data) => {
    return Object.entries(data).map(([year, value]) => ({ year, value }));
  };

  const handlePredict = async () => {
    setLoading(true); // Set loading state
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/predict-expenses', {
        num_years: numYears,
      });
      setPredictions(response.data);
    } catch (error) {
      console.error('Error predicting expenses:', error);
    } finally {
      setLoading(false); // Set loading to false after prediction
    }
  };

  return (
    <div className="expense-insights">
      <Menu mode="horizontal" selectedKeys={[activeKey]} onClick={(e) => setActiveKey(e.key)} className="menu">
        <Menu.Item key="insights" icon={<WalletOutlined />}>
          Expense Insights
        </Menu.Item>
        <Menu.Item key="recommendations" icon={<InfoCircleOutlined />}>
          Recommendations
        </Menu.Item>
        <Menu.Item key="predictions" icon={<LineChartOutlined />}>
          Expense Predictions
        </Menu.Item>
      </Menu>

      {/* Loading Indicator */}
      {loading ? (
        <Spin size="large" className="loading-indicator" />
      ) : (
        <>
          {activeKey === 'insights' && (
            <>
              <h2 className="page-title">Expense Insights</h2>
              <Row gutter={16}>
                <Col span={12}>
                  <Card title="Total Expenses Over the Year" className="insight-card">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={generateChartData(totalExpenses)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                        <Legend />
                        <Bar dataKey="value" fill="#3b82f6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Yearly Expense Growth Rate" className="insight-card">
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={generateChartData(growthRate)}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#38b2b8" />
                      </LineChart>
                    </ResponsiveContainer>
                  </Card>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={24}>
                  <Card title="Breakdown of Liabilities Over the Years" className="insight-card">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={breakdownLiabilities}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {Object.keys(breakdownLiabilities[0] || {}).filter(key => key !== 'year').map((key, index) => (
                          <Bar key={index} dataKey={key} fill={`hsl(${(index * 50) % 360}, 70%, 50%)`} />
                        ))}
                      </BarChart>
                    </ResponsiveContainer>
                  </Card>
                </Col>
              </Row>
            </>
          )}

          {activeKey === 'recommendations' && (
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Recommendations" className="insight-card">
                  <Alert
                    message="Important Recommendations"
                    description={recommendations.map((rec, index) => (
                      <div key={index}><InfoCircleOutlined /> {rec}</div>
                    ))}
                    type="info"
                    showIcon
                  />
                </Card>
              </Col>
            </Row>
          )}

          {activeKey === 'predictions' && (
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Predict Future Expenses" className="insight-card">
                  <p>
                    To predict future expenses, enter the number of years you want to forecast.
                    For example, entering '2' will show predictions for the next two years.
                  </p>
                  <Input
                    type="number"
                    value={numYears}
                    onChange={(e) => setNumYears(e.target.value)}
                    min={1}
                    placeholder="Enter number of years to predict"
                    className="predict-input"
                  />
                  <Button onClick={handlePredict} type="primary" style={{ marginTop: '10px' }}>
                    Predict
                  </Button>
                </Card>
              </Col>
            </Row>
          )}
          
          {/* Display Predictions */}
          {activeKey === 'predictions' && Object.keys(predictions).length > 0 && (
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Predicted Future Expenses" className="insight-card">
                  {Object.entries(predictions).map(([year, expense], index) => (
                    <div key={year}>Year {index + 1}: ${expense.toFixed(2)}</div>
                  ))}
                </Card>
              </Col>
            </Row>
          )}
        </>
      )}
    </div>
  );
};

export default ExpenseInsights;
