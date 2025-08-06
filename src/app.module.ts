import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { BrandsModule } from './brands/brands.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema/schema.gql',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',
        url: configService.get<string>('DB_URL'),
        // host: configService.get<string>('DB_HOST'),
        // port: configService.get<number>('DB_PORT'),
        // username: configService.get<string>('DB_USERNAME'),
        // password: configService.get<string>('DB_PASSWORD'),
        // database: configService.get<string>('DB_DATABASE'),
        entities: [join(process.cwd(), 'dist/**/*.entity.js')],
        synchronize: true,
      }),
    }),
    PostsModule,
    BrandsModule,
  ],
})
export class AppModule {}
