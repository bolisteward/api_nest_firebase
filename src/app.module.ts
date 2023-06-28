import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AccessMiddleware } from "./middleware/access.middleware";

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  //providers: [FirebaseService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AccessMiddleware)
      .forRoutes('*');
  }
}
