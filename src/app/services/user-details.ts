import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  api = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getuserDeatails(){
    const usersdetails = this.http.get(this.api);
    return usersdetails;
  }
}
