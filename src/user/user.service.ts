import { Injectable, NotFoundException } from "@nestjs/common";
import { User, DataSelected } from './user.model';
import { FirebaseService } from "src/firebase/firebase.service";
import { GoogleService } from "src/googleSheet/google.service";

@Injectable()
export class UserService {

  constructor(private firebaseService: FirebaseService, private googleService: GoogleService) { }

  private users: User[] = [];

  public async addUser(name: string, email: string, phone: string, data: DataSelected): Promise<string> {
    try {
      let newUser = new User(name, email, phone, data);

      //add user to firestore
      const result = await this.firebaseService.database.collection('users').add({
        ...newUser.getUser(),
        timestamp: this.firebaseService.TimeFrame(),
      });

      newUser.setUserDate((await result.get()).readTime.toDate()
        .toISOString().slice(0, 19).replace('T', ' '));
      newUser.setUserId(result.id);

      this.googleService.addData(newUser.getSheetUserData());
      this.users.push(newUser);

      return result.id;

    } catch (error) {
      console.error('Error', error);
      return '';
    }
  }

  getUsers() {
    return [...this.users];
  }

  getSingleUser(userId: string) {
    const user = this.users.find((user) => user.getUserId() === userId);

    if (!user) {
      throw new NotFoundException("Could not find user.");
    }
    return { ...user };
  }


}