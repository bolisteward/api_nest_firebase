export class User {
  constructor(
    public name: string,
    public email: string,
    public phoneNumber: string,
    public id?: string
    ){}

  getUser(){
    return {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber      
    }
  }
}