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

  getMailData() {
    const options = {
      comedor: {
        minimalista: {
          galapagos:
            "Disfrutas la compañía de la gente en tu hogar y la sobremesa es igual de importante que la comida. El aquí y el ahora armonizan tu vida, por eso el orden y la simplicidad suele ser muy importante para tu vida. Las olas del mar recargarán tu magia e inspirarán a reimaginar tu hogar con Colors 2023.",
          sierra:
            "Disfrutas la compañía de la gente en tu hogar y la sobremesa es igual de importante que la comida. El aquí y el ahora armonizan tu vida, por eso el orden y la simplicidad suele ser muy importante para tu vida. La paz de las montañas conecta directamente con tu ser interior e inspira a reimaginar tu hogar con Colors 2023.",
          amazonia:
            "Disfrutas la compañía de la gente en tu hogar y la sobremesa es igual de importante que la comida. El aquí y el ahora armonizan tu vida, por eso el orden y la simplicidad suele ser muy importante para tu vida. Los espacios verdes conectan con tu lado natural e inspiran a reimaginar tu hogar con Colors 2023.",
        },
        contemporaneo: {
          galapagos:
            "Valoras el espacio por la calidez de la gente en tu hogar y las conversaciones sobremesa son igual de importantes que la comida. Para ti, las relaciones humanas deben ser como los espacios: con calma y tranquilidad. Recuerda recargar tu magia con las olas del mar para inspirararte a reimaginar tu hogar con Colors 2023.",
          sierra:
            "Valoras el espacio por la calidez de la gente en tu hogar y las conversaciones sobremesa son igual de importantes que la comida. Para ti, las relaciones humanas deben ser como los espacios: con calma y tranquilidad. La paz de las montañas recarga tu ser interior para inspirarte a reimaginar tu hogar con Colors 2023.",
          amazonia:
            "Valoras el espacio por la calidez de la gente en tu hogar y las conversaciones sobremesa son igual de importantes que la comida. Para ti, las relaciones humanas deben ser como los espacios: con calma y tranquilidad. Las áreas verdes te inspiran y conectan con tu lado natural para reimaginar tu hogar con Colors 2023.",
        },
        industrial: {
          galapagos:
            "Para ti, las personas les dan importancia a los espacios en el hogar y las conversaciones sobremesa son más importantes que la comida. Prefieres las amistades como los objetos: Duraderos y de alta calidad en lugar de acumular una gran cantidad de cosas. Las olas del mar recargarán tu magia e inspirarán a reimaginar tu hogar con Colors 2023.",
          sierra:
            "Para ti, las personas les dan importancia a los espacios en el hogar y las conversaciones sobremesa son más importantes que la comida. Prefieres las amistades como los objetos: Duraderos y de alta calidad en lugar de acumular una gran cantidad de cosas. La sencillez de las montañas te inspira a reimaginar tu hogar con Colors 2023.",
          amazonia:
            "Para ti, las personas les dan importancia a los espacios en el hogar y las conversaciones sobremesa son más importantes que la comida. Prefieres las amistades como los objetos: Duraderos y de alta calidad en lugar de acumular una gran cantidad de cosas. Las áreas verdes te inspiran y conectan con tu lado natural para reimaginar tu hogar con Colors 2023.",
        },
      },
      sala: {
        minimalista: {
          galapagos:
            "Sueles buscar más conexión emocional con tu hogar y disfrutas mucho la visita de las personas. Cada cosa debe tener su espacio y lugar para que haya armonía en tu vida. Las olas del mar recargarán tu magia e inspirarán a reimaginar tu hogar con Colors 2023.",
          sierra:
            "Sueles buscar más conexión emocional con tu hogar y disfrutas mucho la visita de las personas. Cada cosa debe tener su espacio y lugar para que haya armonía en tu vida. La sencillez de las montañas te inspira a reimaginar tu hogar con Colors 2023.",
          amazonia:
            "Sueles buscar más conexión emocional con tu hogar y disfrutas mucho la visita de las personas. Cada cosa debe tener su espacio y lugar para que haya armonía en tu vida. Los espacios verdes conectan con tu lado natural e inspiran a reimaginar tu hogar con Colors 2023.",
        },
        contemporaneo: {
          galapagos:
            "Valoras más la comodidad y confort en los espacios de tu hogar, para brindar ambientes acogedores a tus invitados. Sientes comodidad sin importar la variedad temas que se pueden conversar. Las olas del mar recargarán tu magia e inspirarán a reimaginar tu hogar con Colors 2023.",
          sierra:
            "Valoras más la comodidad y confort en los espacios de tu hogar, para brindar ambientes acogedores a tus invitados. Sientes comodidad sin importar la variedad temas que se pueden conversar. La paz de las montañas recarga tu ser interior para inspirarte a reimaginar tu hogar con Colors 2023.",
          amazonia:
            "Valoras más la comodidad y confort en los espacios de tu hogar, para brindar ambientes acogedores a tus invitados. Sientes comodidad sin importar la variedad temas que se pueden conversar en una reunión. Las áreas verdes te inspiran y conectan con tu lado natural para reimaginar tu hogar con Colors 2023.",
        },
        industrial: {
          galapagos:
            "Canalizas tu lado más sociable y extrovertido en tu hogar para brindar una cálida bienvenida a cada invitado. Expones tu lado más tú en cada conversación, incluso cuando se trata de recién conocidos. Las olas del mar recargarán tu magia e inspirarán a reimaginar tu hogar con Colors 2023.",
          sierra:
            "Canalizas tu lado más sociable y extrovertido en tu hogar para brindar una cálida bienvenida a cada invitado. Expones tu lado más tú en cada conversación, incluso cuando se trata de recién conocidos. La paz de las montañas conecta directamente con tu ser interior e inspira a reimaginar tu hogar con Colors 2023.",
          amazonia:
            "Canalizas tu lado más sociable y extrovertido en tu hogar para brindar una cálida bienvenida a cada invitado. Expones tu lado más tú en cada conversación, incluso cuando se trata de recién conocidos. Los espacios verdes conectan con tu lado natural e inspiran a reimaginar tu hogar con Colors 2023.",
        },
      },
      dormitorio: {
        minimalista: {
          galapagos:
            "Buscas ambientes relajados donde sientas la tranquilidad de ser tú para conectar íntimamente con las personas. El orden de las cosas, espacios y amistades te permiten desenvolverte como deseas. Las olas del mar recargarán tu magia e inspirarán a reimaginar tu hogar con Colors 2023.",
          sierra:
            "Buscas ambientes relajados donde sientas la tranquilidad de ser tú para conectar íntimamente con las personas. El orden de las cosas, espacios y amistades te permiten desenvolverte como deseas. La paz de las montañas conecta directamente con tu ser interior e inspira a reimaginar tu hogar con Colors 2023.",
          amazonia:
            "Buscas ambientes relajados donde sientas la tranquilidad de ser tú para conectar íntimamente con las personas. El orden de las cosas, espacios y amistades te permiten desenvolverte como deseas. Los espacios verdes conectan con tu lado natural e inspiran a reimaginar tu hogar con Colors 2023.",
        },
        contemporaneo: {
          galapagos:
            "Tienes una conexión emocional con los espacios de tu hogar y estás constantemente adecuándolos a ti. Mezclas estilos constantemente para llegar a tu mejor versión. Las olas del mar recargarán tu magia e inspirarán a reimaginar tu hogar con Colors 2023.",
          sierra:
            "Tienes una conexión emocional con los espacios de tu hogar y estás constantemente adecuándolos a ti. Mezclas estilos constantemente para llegar a tu mejor versión. La sencillez de las montañas te inspira a reimaginar tu hogar con Colors 2023.",
          amazonia:
            "Tienes una conexión emocional con los espacios de tu hogar y estás constantemente adecuándolos a ti. Mezclas estilos constantemente para llegar a tu mejor versión. Las áreas verdes te inspiran y conectan con tu lado natural para reimaginar tu hogar con Colors 2023.",
        },
        industrial: {
          galapagos:
            "No temes a mostrar tu lado más original para conectar íntimamente con las personas que quieres. Creas espacios e interacciones que generan una reacción inmediata de parte de tus invitados o receptores. Las olas del mar recargarán tu magia e inspirarán a reimaginar tu hogar con Colors 2023.",
          sierra:
            "No temes a mostrar tu lado más original para conectar íntimamente con las personas que quieres. Creas espacios e interacciones que generan una reacción inmediata de parte de tus invitados o receptores. La paz de las montañas conecta directamente con tu ser interior e inspira a reimaginar tu hogar con Colors 2023.",
          amazonia:
            "No temes a mostrar tu lado más original para conectar íntimamente con las personas que quieres. Creas espacios e interacciones que generan una reacción inmediata de parte de tus invitados o receptores. Las áreas verdes te inspiran y conectan con tu lado natural para reimaginar tu hogar con Colors 2023.",
        },
      },
    };

    const Titles = {
      sierra: "Sierra",
      amazonia: "Amazonía",
      galapagos: "Galápagos"
    }

    return {
      call: "EmailColors2023",
      email: this.email,
      Nombre: this.name,
      ambiente: this.data.paisaje + ".jpg",
      titulo: "Mi paleta de colores está inspirada en la "+Titles[this.data.paisaje],
      contenido: options[this.data.hogar][this.data.estilo][this.data.paisaje],
      adicional: ""
    }
  }
}