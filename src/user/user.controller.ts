import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { DataSelected } from './user.model';
import { UserService } from './user.service'; 
@Controller('user')
export class userController {
  
  constructor(private readonly userService: UserService) { }


  @Post()
  async addUser(
    @Body('name') userName: string,
    @Body('email') userEmail: string,
    @Body('phone') userPhone: string,
    @Body('data') userData: DataSelected
    ) {
      const {id, emailStatus }= await this.userService.addUser(userName, userEmail, userPhone, userData);

      const status = id!= ""? "OK": "Error";

      return {status: status, id: emailStatus};
  }


  @Get()
  getAllUsers(){
    return this.userService.getUsers();
  }

  @Get(':id')
  getSingleUsers(@Param('id') userId: string){
    return this.userService.getSingleUser(userId);
  }



  
}