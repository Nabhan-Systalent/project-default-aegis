import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrchestrationService } from './orchestration.service';
import { WorkflowStatusDto } from './dto';

@ApiTags('Orchestration')
@Controller('workflows')
export class OrchestrationController {
  constructor(private readonly orchestrationService: OrchestrationService) {}

  @Get()
  @ApiOperation({ summary: 'List active agent workflows' })
  @ApiResponse({ status: 200, type: [WorkflowStatusDto], description: 'Returns active workflow list' })
  async getWorkflowStatus(): Promise<WorkflowStatusDto[]> {
    return await this.orchestrationService.getActiveWorkflows();
  }
}
