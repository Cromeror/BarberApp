import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-client-login-method',
  templateUrl: './client-login-method.component.html',
  styleUrls: ['./client-login-method.component.scss']
})
export class ClientLoginMethodComponent implements OnChanges {
  @Output() submitEvent = new EventEmitter<{ value: string, type: LoginType }>();
  @Input() method: LoginType | string;
  @Input() value = '';

  loginType: LoginType;
  currentValue = '';

  constructor() {
    this.loginType = LoginType.FINGERPRINT;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.method?.previousValue !== changes.method?.currentValue) {
      this.selectLoginMethod(changes.method.currentValue);
    }
    if (changes.value?.previousValue !== changes.value?.currentValue) {
      this.currentValue = changes.value.currentValue;
    }
  }

  /**
   * change the selection of login type method
   *
   * @param selectedMethod: LoginType
   */
  selectLoginMethod(selectedMethod: LoginType | string): void {
    switch (selectedMethod) {
      case LoginType.FINGERPRINT:
        this.loginType = LoginType.FINGERPRINT;
        break;
      case LoginType.PHONE:
        this.loginType = LoginType.PHONE;
        break;
      case LoginType.EMAIl:
        this.loginType = LoginType.EMAIl;
        break;
      default:
        this.loginType = LoginType.FINGERPRINT;
        break;
    }
    this.currentValue = '';
  }

  submitValue(): void {
    this.submitEvent.emit({
      value: this.currentValue,
      type: this.loginType
    });
  }
}

export enum LoginType {FINGERPRINT = 'FINGERPRINT', PHONE = 'PHONE', EMAIl = 'EMAIl' }
