import {Component, Input} from '@angular/core';
import {GenericDialog} from '../utils/generic-dialog';
import {User, UserService} from '../api/user.service';

@Component({
  selector: 'app-dialog-form-client',
  templateUrl: './dialog-form-client.component.html',
  styleUrls: ['./dialog-form-client.component.scss']
})
export class DialogFormClientComponent extends GenericDialog {
  @Input() client: User;
  isValid: boolean;
  currentData: User;

  constructor(private userService: UserService) {
    super();
  }

  handleOk(): void {
    if (this.client?.id) {
      this.userService.update(this.currentData, this.client.id)
        .subscribe((response) => this.okEvent.emit(response));
    } else {
      this.userService.create(this.currentData).subscribe();
    }
    super.handleOk();
  }

  formIsValid(event: boolean) {
    this.isValid = event;
  }
}
