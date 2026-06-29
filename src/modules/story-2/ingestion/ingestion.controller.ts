import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { IngestionService } from './ingestion.service';
import { IngestDocumentDto, IngestDocumentResponseDto } from './dto';

@ApiTags('Ingestion')
@Controller('documents')
export class IngestionController {
  constructor(private readonly ingestionService: IngestionService) {}

  @Post()
  @ApiOperation({ summary: 'Ingest BRD files' })
  @ApiResponse({ status: 200, description: 'Document processed successfully', type: IngestDocumentResponseDto })
  async ingestDocument(@Body() body: IngestDocumentDto): Promise<IngestDocumentResponseDto> {
    return await this.ingestionService.processDocument(body);
  }
}
