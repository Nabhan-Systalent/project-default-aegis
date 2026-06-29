import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { OrchestrationService } from './orchestration.service';
import { WorkflowResponseDto } from './dto/workflow-response.dto';

@ApiTags('Orchestration')
@Controller('workflows')
export class OrchestrationController {
  constructor(private readonly orchestrationService: OrchestrationService) {}

  @Get()
  @ApiOperation({ summary: 'List active agent workflows' })
  @ApiResponse({ status: 200, type: [WorkflowResponseDto], description: 'Returns active workflow list' })
  async getWorkflowStatus(): Promise<WorkflowResponseDto[]> {
    return await this.orchestrationService.getActiveWorkflows();
  }
}
