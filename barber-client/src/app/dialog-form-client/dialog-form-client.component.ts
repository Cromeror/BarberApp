import {Component} from '@angular/core';
import {GenericDialog} from '../utils/generic-dialog';
import {User, UserService} from '../api/user.service';

@Component({
  selector: 'app-dialog-form-client',
  templateUrl: './dialog-form-client.component.html',
  styleUrls: ['./dialog-form-client.component.scss']
})
export class DialogFormClientComponent extends GenericDialog {
  isValid: boolean;
  currentData: User;

  constructor(private userService: UserService) {
    super();
  }

  handleOk(): void {
    this.userService.create(this.currentData).subscribe();
    super.handleOk();
  }

  formIsValid(event: any) {
    this.isValid = event.valid;
    this.currentData = event.data;
  }
}
