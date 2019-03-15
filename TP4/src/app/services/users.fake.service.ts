import { IUsersService, User, Status } from './users.interface';

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

  create(user: User): Promise<User> { //création de nouvel utilisateur et ajout à la table users

    user.id = this.users.length + 1;
    user.status = Status.offline;

    this.users.push(user);

    return Promise.resolve(user);
  }

  exists(email: string): Promise<boolean> {

    const user = this.users.find(u => u.email === email);

    return Promise.resolve(!!user);
  }

  getUsers(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  get(email: string): Promise<User> {
    return Promise.resolve(this.users.find(u => u.email === email));
  }
}
