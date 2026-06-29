'use client';

import React from 'react';
import { DashboardProps } from './Dashboard.types';

export const Dashboard: React.FC<DashboardProps> = ({ workflows = [], isLoading, error }) => {
  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Loading orchestrator status...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">Error loading dashboard: {error}</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Orchestrator Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workflows.length === 0 ? (
          <p className="col-span-full text-gray-500">No active workflows found.</p>
        ) : (
          workflows.map((wf) => (
            <div key={wf.id} className="p-4 border rounded-lg shadow-sm bg-white border-gray-200">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-gray-800">{wf.name}</h3>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  wf.status === 'active' ? 'bg-green-100 text-green-800' :
                  wf.status === 'error' ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {wf.status}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-2">Last Run: {wf.lastRun}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
