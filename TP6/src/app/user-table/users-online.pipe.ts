import { Pipe, PipeTransform } from '@angular/core';
import {User, Status} from '../services/users.interface';

@Pipe({
    name: 'usersOnline'
})
export class UsersOnlinePipe implements PipeTransform {

    transform(users: User[] = [], showOnline: boolean = true): any {

        return users.filter(user =>
            showOnline ? (user.status === Status.busy || user.status === Status.online) : true
        );

    }

}
