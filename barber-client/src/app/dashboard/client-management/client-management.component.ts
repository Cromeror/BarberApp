import {Component, OnInit} from '@angular/core';
import {PaginateUser, UserService} from '../../api/user.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss']
})
export class ClientManagementComponent implements OnInit {
  clients: PaginateUser;
  showDialog = false;

  constructor(private userService: UserService) {
    this.userService.all({type: 'client'}).subscribe((clients) => {
      this.clients = clients;
    });
  }

  ngOnInit(): void {
  }

  openDialogToEnding(): void {
    this.showDialog = true;
  }

  closeFormDialog(): void {
    this.showDialog = false;
  }
}
