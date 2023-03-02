export class UserModel {
  id?: number = undefined;
  name: string = '';
  email: string = '';
  password: string = '';
  roles?: string[] = []

  // constructor(public id: number, public name: string, public email: string, public password: string) {
  //   this.id = id;
  //   this.name = name;
  //   this.email = email;
  //   this.password = password;
  // }

}
