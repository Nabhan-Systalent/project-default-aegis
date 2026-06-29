import React from 'react';

export interface DashboardProps {
  workflows: Array<{
    id: string;
    name: string;
    status: 'active' | 'idle' | 'error';
    lastRun: string;
  }>;
  isLoading?: boolean;
  error?: string | null;
}
