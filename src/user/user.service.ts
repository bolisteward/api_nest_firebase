import { Injectable, NotFoundException } from "@nestjs/common";
import { User, DataSelected } from './user.model';
import { FirebaseService } from "src/firebase/firebase.service";

@Injectable()
export class UserService {

  constructor(private firebaseService: FirebaseService){}

  private users: User[] = [];

  public async addUser(name: string, email: string, phone: string, data: DataSelected): Promise<string> {
    try {
      let newUser = new User(name, email, phone, data);
      const result = await this.firebaseService.database.collection('users')
      .add({
        timestamp: this.firebaseService.TimeFrame(),
        ...newUser.getUser()});
      newUser.setUserId(result.id);
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
    return {...user};
  }
   
  
}