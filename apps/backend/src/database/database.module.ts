import {Module} from '@nestjs/common';
import {DATABASE_CONNECTION} from "./database-connection";
import {ConfigService} from "@nestjs/config";
import {Pool} from "pg";
import {drizzle} from "drizzle-orm/node-postgres";

@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useFactory: (configService: ConfigService) => {
        const isMigrating = configService.get('MIGRATE_DATABASE') === 'true';
        const isSeeding = configService.get('SEED_DATABASE') === 'true';

        const pool = new Pool({
          connectionString: configService.getOrThrow('DATABASE_URL'),
          max: isMigrating || isSeeding ? 1 : 10,
        });

        return drizzle(pool, {});
      },
      inject: [ConfigService],
    },
  ],
  exports: [DATABASE_CONNECTION],
})

export class DatabaseModule {
}
