import { Component, OnInit } from '@angular/core';
import { DashboardUserCardComponent } from "../../templates/dashboard-user-card/dashboard-user-card.component";
import User from '../../../models/User';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-dashboard-users-panel',
  standalone: true,
  imports: [DashboardUserCardComponent, DashboardUserCardComponent],
  templateUrl: './dashboard-users-panel.component.html',
  styleUrl: './dashboard-users-panel.component.css'
})
export class DashboardUsersPanelComponent implements OnInit {
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
