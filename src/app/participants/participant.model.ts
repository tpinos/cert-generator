export class Participant {
  id: number;
  name: string;
  email: string;
  location: string;

  constructor(id: number, name: string, email: string, location: string){
    this.id = id;
    this.name = name;
    this.email = email;
    this.location = location;
  }
}
