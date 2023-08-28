import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API_URL = "https://jsonplaceholder.typicode.com";

  //httpClient : HttpClient = inject(HttpClient)

  constructor(private httpClient: HttpClient) {

   }

  getPosts(): any {  

    return this.httpClient.get(`${this.API_URL}/users`);
  }
}
