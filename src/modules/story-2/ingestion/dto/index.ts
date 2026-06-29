import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class IngestDocumentDto {
  @ApiProperty({ description: 'The raw text or base64 encoded document content' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'The type of document: pdf, docx, or markdown' })
  @IsString()
  @IsNotEmpty()
  type: string;
}

export class IngestDocumentResponseDto {
  @ApiProperty({ example: 'doc_12345', description: 'Unique identifier of the ingested document' })
  id: string;

  @ApiProperty({ example: 'success', description: 'Processing status' })
  status: string;
}
