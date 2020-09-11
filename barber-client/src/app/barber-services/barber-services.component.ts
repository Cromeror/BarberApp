import {Component} from '@angular/core';
import {PaginateService, Service, ServicesService} from '../api/services.service';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-barber-services',
  templateUrl: './barber-services.component.html',
  styleUrls: ['./barber-services.component.scss']
})
export class BarberServicesComponent {
  currentServices: Service[];
  form: FormGroup;

  constructor(private services: ServicesService, private fb: FormBuilder) {
    this.form = this.fb.group({
      gender: ['man'],
      services: this.fb.array([])
    });
    this.refreshServices();
    this.form.get('gender').valueChanges
      .subscribe((gender: string) => this.refreshServices(gender));
  }

  refreshServices(gender = 'man'): void {
    const serviceArray = this.form.get('services') as FormArray;
    serviceArray.clear();
    this.services.all({gender})
      .subscribe((paginateService: PaginateService) => {
        paginateService.data.forEach((service: Service) => {
          serviceArray.push(this.fb.group({
            name: [service.name],
            id: [service.id],
            selected: [false]
          }));
        });
        this.currentServices = paginateService.data;
      });
  }

  get bValue(): number[] {
    return this.form.value.services
      .filter((value) => value.selected)
      .map((value) => value.id);
  }
}
