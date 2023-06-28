import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { FirebaseService } from './firebase/firebase.service';

@Module({
  imports: [ConfigModule.forRoot(), UserModule],
  //providers: [FirebaseService]
})
export class AppModule {}
