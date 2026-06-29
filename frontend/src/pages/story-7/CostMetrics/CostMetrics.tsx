import React from 'react';

export interface CostMetricsProps {
  spendData: Array<{ project: string; cost: number }>;
}

export const CostMetrics: React.FC<CostMetricsProps> = ({ spendData }) => {
  if (!spendData || spendData.length === 0) {
    return <div className="text-neutral-500">No financial data available yet.</div>;
  }

  return (
    <div className="bg-white p-6 rounded-xl border border-neutral-200">
      <h2 className="text-xl font-bold mb-6">Real-time Spend Tracking</h2>
      <div className="space-y-4">
        {spendData.map((d) => (
          <div key={d.project} className="flex justify-between items-center">
            <span className="font-medium text-neutral-700">{d.project}</span>
            <span className="text-lg font-mono font-bold text-neutral-900">${d.cost.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
