import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {

  friends: string[] = ['Rahul','Kiran','Arjun','Sai','Vikram'];


  getName() {
    return 'Ramakanth Reddy';
  }

  getFriends(){

    return this.friends;

  }
  
}
