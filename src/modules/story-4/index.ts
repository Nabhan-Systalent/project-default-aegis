import { Module } from '@nestjs/common';
import { OrchestrationController } from './orchestration/orchestration.controller';
import { OrchestrationService } from './orchestration/orchestration.service';

/**
 * Story module for story-4 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [OrchestrationController],
  providers: [OrchestrationService],
})
export class Story4Module {}
