import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
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
