import React from 'react';

export interface DashboardProps {
  workflows: Array<{ id: string; name: string; status: 'active' | 'idle' | 'error'; activeAgents: number }>;
}

export const OrchestratorDashboard: React.FC<DashboardProps> = ({ workflows }) => {
  if (!workflows || workflows.length === 0) {
    return (
      <div className="p-8 text-center border-2 border-dashed border-neutral-300 rounded-lg">
        <p className="text-neutral-500">No active workflows found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {workflows.map((wf) => (
        <div key={wf.id} className="p-6 bg-white border border-neutral-200 rounded-xl shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-neutral-900">{wf.name}</h3>
            <span className={`px-2 py-1 text-xs rounded-full ${
              wf.status === 'active' ? 'bg-green-100 text-green-700' : 
              wf.status === 'error' ? 'bg-red-100 text-red-700' : 'bg-neutral-100 text-neutral-600'
            }`}>
              {wf.status.toUpperCase()}
            </span>
          </div>
          <p className="text-sm text-neutral-600">Active Agents: {wf.activeAgents}</p>
        </div>
      ))}
    </div>
  );
};
