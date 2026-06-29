import { Module } from '@nestjs/common';
import { OrchestrationController } from './orchestration.controller';
import { OrchestrationService } from './orchestration.service';

@Module({
  controllers: [OrchestrationController],
  providers: [OrchestrationService],
})
export class OrchestrationModule {}
