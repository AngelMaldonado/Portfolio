import { UserCardComponent } from '@admincomponents/templates/user-card/user-card.component';
import { Component, OnInit } from '@angular/core';
import User from '@models/User';
import { UsersService } from '@services/users.service';

@Component({
    selector: 'app-dashboard-users-panel',
    imports: [UserCardComponent, UserCardComponent],
    templateUrl: './users-panel.component.html',
    styleUrl: './users-panel.component.css'
})
export class UsersPanelComponent implements OnInit {
  users: User[]
  constructor(private usersService: UsersService) {
    this.users = []
    this.getUsers()
  }

  ngOnInit() {
    this.usersService.someChange.subscribe(_ => this.getUsers())
  }

  getUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users)
  }
}
