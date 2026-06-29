import { ApiProperty } from '@nestjs/swagger';

export class WorkflowResponseDto {
  @ApiProperty({ example: '1' })
  id: string;

  @ApiProperty({ example: 'Jira Sync Workflow' })
  name: string;

  @ApiProperty({ example: 'active' })
  status: 'active' | 'pending' | 'completed';

  @ApiProperty({ example: '2026-06-28T10:00:00Z' })
  startedAt: string;
}
