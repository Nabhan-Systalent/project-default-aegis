import { ApiProperty } from '@nestjs/swagger';

export class WorkflowStatusDto {
  @ApiProperty({ description: 'The unique identifier for the workflow' })
  id: string;

  @ApiProperty({ description: 'Name of the workflow' })
  name: string;

  @ApiProperty({ description: 'Current status of the workflow' })
  status: 'active' | 'pending' | 'completed' | 'failed';

  @ApiProperty({ description: 'The LLM provider currently being used' })
  provider: 'claude' | 'gpt-4o';
}
