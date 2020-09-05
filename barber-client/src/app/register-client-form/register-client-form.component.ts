import {Component, EventEmitter, Output, TemplateRef, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UsersService} from '../api/users.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-register-client-form',
  templateUrl: './register-client-form.component.html',
  styleUrls: ['./register-client-form.component.scss'],
  providers: [UsersService]
})
export class RegisterClientFormComponent {
  @ViewChild('template') template: TemplateRef<any>;
  @Output() successEvent = new EventEmitter();

  form!: FormGroup;

  constructor(public usersService: UsersService,
              private notification: NzNotificationService) {
    this.form = usersService.form;
  }

  registerUser() {
    // tslint:disable-next-line:forin
    for (const i in this.form.controls) {
      this.form.controls[i].markAsDirty();
      this.form.controls[i].updateValueAndValidity();
    }
    this.usersService.create(this.form.value)
      .subscribe(() => {
        this.form.reset();
        this.notification.template(this.template);
        this.successEvent.emit(this.form.value);
      });
  }
}
