import {Component, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {User, UserService} from '../api/user.service';
import {NzNotificationService} from 'ng-zorro-antd';
import {GrownStateService} from '../utils/grown-state.service';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {GenderService} from '../utils/gender.service';

@Component({
  selector: 'app-register-client-form',
  templateUrl: './register-client-form.component.html',
  styleUrls: ['./register-client-form.component.scss'],
  providers: [UserService]
})
export class RegisterClientFormComponent {
  @Input() hideSubmit: boolean;
  @Input() hideDataPolicy = false;
  @ViewChild('template') template: TemplateRef<any>;
  @Output() successEvent = new EventEmitter();
  @Output() isValid = new EventEmitter<{ valid: boolean; data: User }>();

  form!: FormGroup;

  constructor(public usersService: UserService,
              public genderService: GenderService,
              private notification: NzNotificationService,
              private grownStateService: GrownStateService) {
    this.form = usersService.form;
    this.form.get('age').valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((age: number) => {
        const grownState = this.grownStateService.classifyGrownState(age);
        this.form.patchValue({grown_state: grownState});
      });
    this.form.valueChanges
      .pipe(
        map(() => this.form.valid),
        distinctUntilChanged())
      .subscribe((valid) => this.isValid.emit({valid, data: this.form.value}));
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
