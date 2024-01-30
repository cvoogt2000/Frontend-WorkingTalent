import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  createUser(username: string, email: string, password: string) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
