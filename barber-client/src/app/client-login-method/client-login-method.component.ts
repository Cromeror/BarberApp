import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-client-login-method',
  templateUrl: './client-login-method.component.html',
  styleUrls: ['./client-login-method.component.scss']
})
export class ClientLoginMethodComponent {
  @Output() submitEvent = new EventEmitter<{ value: string, type: LoginType }>();

  loginMethod: LoginType;
  currentValue: string;

  constructor() {
    this.loginMethod = LoginType.FINGERPRINT;
  }

  selectLoginMethod(selectedMethod: LoginType | string): void {
    switch (selectedMethod) {
      case LoginType.FINGERPRINT:
        this.loginMethod = LoginType.FINGERPRINT;
        break;
      case LoginType.PHONE:
        this.loginMethod = LoginType.PHONE;
        break;
      case LoginType.EMAIl:
        this.loginMethod = LoginType.EMAIl;
        break;
      default:
        this.loginMethod = LoginType.FINGERPRINT;
        break;
    }
  }

  submitValue(): void {
    this.submitEvent.emit({
      value: this.currentValue,
      type: this.loginMethod
    });
  }
}

export enum LoginType {FINGERPRINT = 'FINGERPRINT', PHONE = 'PHONE', EMAIl = 'EMAIl' }
