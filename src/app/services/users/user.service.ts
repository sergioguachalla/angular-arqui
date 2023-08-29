import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = "https://jsonplaceholder.typicode.com/users";

  //httpClient : HttpClient = inject(HttpClient)

  constructor(private httpClient: HttpClient) {

   }

   getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_URL)
  }
}
