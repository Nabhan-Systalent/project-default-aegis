'use client';

import React from 'react';
import { CostMetricsProps } from './CostMetrics.types';

export const CostMetrics: React.FC<CostMetricsProps> = ({ data = [], isLoading, error }) => {
  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Loading metrics...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">Error: {error}</div>;
  }

  const totalCost = data.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Cost Metrics</h1>
      <div className="p-6 bg-white border rounded-lg shadow-sm">
        <div className="mb-4">
          <span className="text-sm text-gray-500 uppercase tracking-wide">Total Spend</span>
          <div className="text-3xl font-bold text-blue-600">${totalCost.toFixed(2)}</div>
        </div>
        
        {data.length === 0 ? (
          <p className="text-gray-500">No usage data available.</p>
        ) : (
          <div className="h-64 flex items-end gap-2">
            {data.map((point) => (
              <div key={point.date} className="flex-1 flex flex-col items-center gap-2 group">
                <div 
                  className="w-full bg-blue-200 hover:bg-blue-400 transition-colors rounded-t"
                  style={{ height: `${(point.cost / (Math.max(...data.map(d => d.cost)) || 1)) * 100}%` }}
                />
                <span className="text-[10px] text-gray-400">{point.date}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
