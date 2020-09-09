import {AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Service, ServicesService} from '../api/services.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-service',
  templateUrl: './form-service.component.html',
  styleUrls: ['./form-service.component.scss'],
  providers: [ServicesService]
})
export class FormServiceComponent implements AfterViewInit, OnChanges {
  @Input() values: Service;
  @Input() form!: FormGroup;
  @Output() successEvent = new EventEmitter();

  ngAfterViewInit(): void {
    this.form.statusChanges
      .subscribe((status) => this.successEvent.emit(status === 'VALID'));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.values.previousValue !== changes.values.currentValue) {
      this.form.patchValue(changes.values.currentValue);
    }
  }

  formatterPesos = (value: number) => `$ ${value ? value : 0}`;
  parserPesos = (value: string) => value.replace('$ ', '');
}
