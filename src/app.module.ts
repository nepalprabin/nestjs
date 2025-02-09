import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { PostModule } from './posts/posts.module';
import { DatabaseModule } from './database.module';
import { ExceptionsLoggerFilter } from './utils/exceptionsLogger.filter';
import { APP_FILTER } from '@nestjs/core';
import { AuthenticationModule } from './auth/authentication.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PostModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    AuthenticationModule,
    UsersModule,
  ],
  controllers: [],
  providers: [{ provide: APP_FILTER, useClass: ExceptionsLoggerFilter }],
})
export class AppModule {}
