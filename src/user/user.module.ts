import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { userController } from "./user.controller";
import { FirebaseService } from "src/firebase/firebase.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule],
  controllers: [userController],
  providers: [UserService, FirebaseService]
})

export class UserModule {}