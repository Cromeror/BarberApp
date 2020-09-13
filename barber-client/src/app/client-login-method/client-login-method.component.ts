import {Component} from '@angular/core';

@Component({
  selector: 'app-client-login-method',
  templateUrl: './client-login-method.component.html',
  styleUrls: ['./client-login-method.component.scss']
})
export class ClientLoginMethodComponent {
  loginMethod: LoginType;

  // @Output()

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

}

enum LoginType {FINGERPRINT = 'FINGERPRINT', PHONE = 'PHONE', EMAIl = 'EMAIl' }
