export interface DataSelected{
  hogar: string,
  estilo: string,
  paisaje: string,
}

export class User {
  constructor(
    private name: string,
    private email: string,
    private phoneNumber: string,
    private data: DataSelected, 
    private id?: string
    ){}

  getUser(){
    return {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      data: this.data     
    }
  }

  getUserdata(){
    return {
      data: this.data     
    }
  }

  setUserId(id: string){
    this.id = id;
  }

  getUserId(){
    return this.id;
  }
}