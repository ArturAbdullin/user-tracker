export class AppUser {
  name: string;
  age: number;
  id: number;
  constructor(name: string, age: number, id: number = Math.random()) {
    this.name = name;
    this.age = age;
    this.id = id;
  }
}
