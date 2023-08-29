import { Component, OnInit, inject } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  userService : UserService = inject(UserService)
  users: User[] = []

  ngOnInit() : void {
      console.log("ngOnInit")
      this.userService.getUsers().subscribe(users => {
        console.log(users);
        this.users = users
      })
  }


  

}
