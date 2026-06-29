import { Injectable } from '@nestjs/common';
import { WorkflowStatusDto } from './dto';

@Injectable()
export class OrchestrationService {
  private workflows: WorkflowStatusDto[] = [
    { id: 'wf-1', name: 'Primary Analysis', status: 'active', provider: 'gpt-4o' },
    { id: 'wf-2', name: 'Secondary Content Gen', status: 'active', provider: 'claude' },
  ];

  async getActiveWorkflows(): Promise<WorkflowStatusDto[]> {
    // In a production app, this would query a database or cache layer
    return this.workflows;
  }
}
