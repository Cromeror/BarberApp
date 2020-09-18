import {AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Service, ServicesService} from '../api/services.service';
import {FormGroup} from '@angular/forms';
import {GrownStateService} from '../utils/grown-state.service';
import {GenderService} from '../utils/gender.service';

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

  constructor(public grownStateService: GrownStateService,
              public genderService: GenderService) {
  }

  ngAfterViewInit(): void {
    this.form.statusChanges
      .subscribe((status) => this.successEvent.emit(status === 'VALID'));

    this.form.get('gender').valueChanges
      .subscribe((gender) => {
        switch (gender) {
          case 'woman':
            this.form.patchValue({age: 18});
            break;
          case 'man':
            this.form.patchValue({age: 18});
            break;
          case 'teen':
            this.form.patchValue({age: 15});
            break;
          case 'boy':
            this.form.patchValue({age: 0});
            break;
        }
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.values.previousValue !== changes.values.currentValue) {
      this.form.patchValue(changes.values.currentValue);
    }
  }

  formatterPesos = (value: number) => `$ ${value ? value : 0}`;
  parserPesos = (value: string) => value.replace('$ ', '');
}
