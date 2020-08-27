import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UsersService} from '../../api/users.service';
import {NzNotificationService} from 'ng-zorro-antd';

@Component({
  selector: 'app-register-client-form',
  templateUrl: './register-client-form.component.html',
  styleUrls: ['./register-client-form.component.scss'],
  providers: [UsersService]
})
export class RegisterClientFormComponent implements OnInit {
  @ViewChild('template') template: TemplateRef<any>;

  form!: FormGroup;

  constructor(public usersService: UsersService,
              private notification: NzNotificationService) {
    this.form = usersService.form;
  }

  ngOnInit(): void {
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
      });
  }
}
