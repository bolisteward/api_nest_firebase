import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { userController } from "./user.controller";
import { FirebaseService } from "src/firebase/firebase.service";
import { ConfigModule } from "@nestjs/config";
import { GoogleService } from "src/googleSheet/google.service";

@Module({
  imports: [ConfigModule],
  controllers: [userController],
  providers: [UserService, FirebaseService, GoogleService]
})

export class UserModule {}