import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const DatabaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (config: ConfigService) => {
      const databaseParams: DataSourceOptions = {
        type: 'postgres',
        host: config.get<string>('POSTGRES_HOST'),
        port: config.get<number>('POSTGRES_PORT'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PASSWORD'),
        database: config.get<string>('POSTGRES_DB'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      };

      const dataSource = new DataSource(databaseParams);

      if (!dataSource.isInitialized) {
        dataSource
          .initialize()
          .then(() => {
            console.log('Data Source has been initialized!');
          })
          .catch((error) => {
            console.error('Data Source initialization error', databaseParams);
            console.error(error);
          });
      }

      return dataSource;
    },
    inject: [ConfigService],
  },
];
