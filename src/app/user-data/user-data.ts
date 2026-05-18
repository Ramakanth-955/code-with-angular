import { Component } from '@angular/core';
import { User } from '../services/user';
@Component({
  selector: 'app-user-data',
  standalone: false,
  templateUrl: './user-data.html',
  styleUrl: './user-data.scss',
})
export class UserData {
  username: string | undefined;
  myfriends: string[] | undefined;

  constructor(public user: User) { }

  ngOnInit() {
    this.username = this.user.getName();
    this.myfriends = this.user.getFriends();
  }



}
