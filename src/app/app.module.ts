import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from '../cat/cat.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../logging.interceptor';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [
    CatModule,
    PrometheusModule.register({
      path: '/metrics',
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule {}
