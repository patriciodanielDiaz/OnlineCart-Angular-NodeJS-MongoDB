import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  
  user:User =new User();

  constructor(private userService: UserService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    let id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.userService.getById(id)
      .then(response => {
        this.user = response;
      })
      .catch(error => {
        console.log(error);
      })
  }
  
}
