import { Injectable } from '@nestjs/common';

export interface Workflow {
  id: string;
  name: string;
  status: 'active' | 'pending' | 'completed';
  startedAt: string;
}

@Injectable()
export class OrchestrationService {
  private readonly workflows: Workflow[] = [
    { id: '1', name: 'Jira Sync Workflow', status: 'active', startedAt: '2026-06-28T10:00:00Z' },
    { id: '2', name: 'User Authentication Flow', status: 'active', startedAt: '2026-06-28T10:05:00Z' },
  ];

  async getActiveWorkflows(): Promise<Workflow[]> {
    return this.workflows.filter((w) => w.status === 'active');
  }
}
