import { Injectable, Inject } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

  async create(createPhotoDto: CreatePhotoDto) {
    let photo = new Photo();
    photo = {
      ...photo,
      ...createPhotoDto,
      views: 0,
    };
    const newPhoto = await this.photoRepository.save(photo);
    return newPhoto;
  }

  findAll() {
    return this.photoRepository.find();
    // return `This action returns all photo`;
  }

  findOne(id: number) {
    return this.photoRepository.findOne({ id });
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  async markView(id: number) {
    try {
      const currentPhoto = await this.photoRepository.findOne(id);
      await this.photoRepository.update(id, {
        views: currentPhoto.views + 1,
      });
      return { success: true };
    } catch (err) {
      throw new Error(`Could not find the photo`);
    }
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
