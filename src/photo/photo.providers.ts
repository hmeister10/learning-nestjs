import { Connection } from 'typeorm';
import { Photo } from './entities/photo.entity';

export const PhotoProviders = [
  {
    provide: 'PHOTO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Photo),
    inject: ['DATABASE_CONNECTION'],
  },
];
