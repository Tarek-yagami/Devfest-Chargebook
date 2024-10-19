import React, { useState } from 'react';

const FinancialReportGenerator = () => {
  // State for managing form inputs
  const [reportType, setReportType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [exportFormat, setExportFormat] = useState('');

  // Handler for generating report
  const handleGenerateReport = (e) => {
    e.preventDefault();
    // Logic for generating report
    console.log(`Report Type: ${reportType}`);
    console.log(`Time Frame: ${startDate} to ${endDate}`);
    console.log(`Export Format: ${exportFormat}`);
  };

  return (
    <div className="min-h-screen font-text bg-gray-50 flex flex-col items-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-title font-bold text-center mb-6">Generate Financial Reports</h1>
        <p className="text-center  text-gray-600 mb-8">
          Select the type of financial report you need, choose the time frame, and export in the format of your choice.
        </p>

        {/* Illustration (optional) */}
        <div className="w-full mb-8 flex justify-center">
          <img src="/financial-report.svg" alt="Financial report illustration" className="h-72" />
        </div>

        {/* Form */}
        <form onSubmit={handleGenerateReport} className="space-y-6">
          {/* Report Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Report Type</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select a report type</option>
              <option value="income-statement">Income Statement</option>
              <option value="balance-sheet">Balance Sheet</option>
              <option value="cash-flow">Cash Flow</option>
            </select>
          </div>

          {/* Time Frame */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Export Format */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Export Format</label>
            <select
              value={exportFormat}
              onChange={(e) => setExportFormat(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select an export format</option>
              <option value="pdf">PDF</option>
              <option value="csv">CSV</option>
              <option value="excel">Excel</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primaryButton text-white px-6 py-3 rounded-md hover:bg-primaryButtonHover transition"
            >
              Generate Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FinancialReportGenerator;
