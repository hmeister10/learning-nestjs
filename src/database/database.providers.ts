import { createConnection } from 'typeorm';
import * as path from 'path';
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        // host: process.env.DB_HOST,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE_NAME,
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
