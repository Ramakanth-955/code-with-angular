import { Component } from '@angular/core';
import { UserDetailsService } from '../services/user-details';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.html',
  styleUrl: './user-details.scss',
})
export class UserDetails {
  users: any[] = [];
  constructor(private userDetails: UserDetailsService) {
    
    this.userDetails.getuserDeatails().subscribe((data : any) => {
      this.users = data;
    });
  }

}
