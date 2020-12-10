import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserDto } from 'src/app/models/userDto';
import { UserType } from 'src/app/models/userType';
import { UserTypeService } from 'src/app/services/user-type.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Array<User> = [];
  userTypeList: Array<UserType> = [];
  userDtoList: Array<UserDto> = [];
  constructor(private userSevice: UserService,private userTypeService:UserTypeService) { }

  ngOnInit(): void {

    this.userSevice.getAll()
    .then(response => {
      this.userList = response;
    })
    .catch(error => {
      console.log(error);
    })

    this.userTypeService.getAll()
    .then(response => {
      this.userTypeList = response;
      console.log(this.userTypeList);
    })
    .catch(error => {
      console.log(error);
    })
  }

}
