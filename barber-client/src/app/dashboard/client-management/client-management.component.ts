import {Component} from '@angular/core';
import {PaginateUser, User, UserService} from '../../api/user.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.scss']
})
export class ClientManagementComponent {
  clients: PaginateUser;
  currentClient: User;
  showDialog = false;
  deleteMsg = '¿Estas seguro que desea eliminar este cliente?';

  constructor(private userService: UserService) {
    this.fetch();
  }

  fetch(): void {
    this.userService.all({type: 'client'})
      .subscribe((clients) => {
        this.clients = clients;
      });
  }

  openDialogToEnding(): void {
    this.showDialog = true;
  }

  closeFormDialog(): void {
    this.currentClient = null;
    this.showDialog = false;
  }

  edit(client: User): void {
    this.currentClient = client;
    this.openDialogToEnding();
  }

  delete(client: User): void {
  }
}
