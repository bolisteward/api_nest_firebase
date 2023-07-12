import { Injectable, NotFoundException } from "@nestjs/common";
import { User, DataSelected } from './user.model';
import { FirebaseService } from "src/firebase/firebase.service";
import { GoogleService } from "src/googleSheet/google.service";
import { ConfigService } from '@nestjs/config';
import axios from "axios";
@Injectable()
export class UserService {

  constructor(private firebaseService: FirebaseService,
    private googleService: GoogleService,
    private configService: ConfigService<{ EMAIL_API: string }>) { }

  private users: User[] = [];

  public async addUser(
    name: string, 
    email: string, 
    phone: string, 
    data: DataSelected
    ): Promise<{id: string, emailStatus: String}> {

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

      const emailData = newUser.getMailData();

      const headersEmail = {
        // Encabezados de la solicitud
        "Content-Type": "application/json",
      };

      const emailresponse = await axios.post(this.configService.get<string>('EMAIL_API'), emailData, { headers: headersEmail });

      if (emailresponse.data.result === "Event Tracked.") {
        throw new Error("Event Tracked.");
      }

      return result.id, emailresponse.data.result;

    } catch (error) {
      console.error('Error', error);
      return {id:'', emailStatus: "Not sent"};
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

  private sendEmail(user: User) {
    const data = user.getMailData()
  }


}
