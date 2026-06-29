import { Module } from '@nestjs/common';
import { IngestionController } from './ingestion/ingestion.controller';
import { IngestionService } from './ingestion/ingestion.service';

/**
 * Story module for story-2 — synthesised by the AEGIS code-gen pipeline so the
 * generated controllers/providers are mounted by the application entrypoint.
 */
@Module({
  controllers: [IngestionController],
  providers: [IngestionService],
})
export class Story2Module {}
