import { createConnection } from 'typeorm';
import * as path from 'path';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [path.join(__dirname, '../**/**/**/*.entity{.ts,.js}')],
        synchronize: process.env.NODE_ENV === 'local',
        extra: {
          ssl:
            process.env.NODE_ENV === 'local'
              ? false
              : {
                  rejectUnauthorized: false,
                },
        },
      }),
  },
];
