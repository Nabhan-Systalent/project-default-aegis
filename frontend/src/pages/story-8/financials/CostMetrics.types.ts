import React from 'react';

export interface CostMetricsProps {
  data: Array<{
    date: string;
    tokens: number;
    cost: number;
  }>;
  isLoading?: boolean;
  error?: string | null;
}
