import { Module } from '@nestjs/common';
import { PhotoProviders } from './photo.providers';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],
  providers: [...PhotoProviders, PhotoService],
})
export class PhotoModule {}
