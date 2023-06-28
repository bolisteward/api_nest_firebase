import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from './user.service'; 

@Controller('user')
export class userController {
  constructor(private readonly userService: UserService) { }


  @Post()
  async addUser(
    @Body('name') userName: string,
    @Body('email') userEmail: string,
    @Body('phone') userPhone: string
    ) {
      const generatedId = await this.userService.addUser(userName, userEmail, userPhone);

      const status = generatedId!= "Error"? "OK": "Error"

      return {status: status, id: generatedId};
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