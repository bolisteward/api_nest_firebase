export interface DataSelected {
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
    private id?: string,
    private date?: string,
  ) { }

  getUser() {
    return {
      timestamp: this.date,
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      data: this.data
    }
  }

  getUserdata() {
    return {
      data: this.data
    }
  }

  setUserId(id: string) {
    this.id = id;
  }

  getUserId() {
    return this.id;
  }

  setUserDate(date: string) {
    this.date = date;
  }

  getSheetUserData() {
    return {
      Id: this.id,
      Fecha: this.date,
      Nombre: this.name,
      Correo: this.email,
      Telefono: this.phoneNumber,
      Estilo: this.data.estilo,
      Hogar: this.data.hogar,
      Paisaje: this.data.paisaje
    }
  }
}