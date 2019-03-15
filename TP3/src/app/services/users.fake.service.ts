import {IUsersService, User} from './users.interface';

export class FakeUsersService implements IUsersService {

  constructor() { }

  private users: User[] = <User[]>[
    {id: 1, firstName: 'john', password: '12345',  lastName: 'doe', email: 'john.doe@gmail.com', status: 'online'},
    {id: 2, firstName: 'jane', password: '12345', lastName: 'doe', email: 'jane.doe@gmail.com', status: 'online'},
    {id: 3, firstName: 'jean', password: '12345', lastName: 'dupond', email: 'jean.dupond@gmail.com', status: 'busy'},
    {id: 4, firstName: 'jean', password: '12345', lastName: 'dupont', email: 'jean.dupont@gmail.com', status: 'offline'},
    {id: 5, firstName: 'jeanne', password: '12345', lastName: 'dupong', email: 'jeanne.dupond@gmail.com', status: 'offline'},
    {id: 6, firstName: 'john', password: '12345', lastName: 'doe', email: 'joe.doe@gmail.com', status: 'online'}
  ];

  getUsers(): Promise<User[]> {
    return Promise.resolve(this.users);
  }


  create(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  exists(email: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  get(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  
}
