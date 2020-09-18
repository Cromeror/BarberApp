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
      services: this.fb.array([])
    });
  }

  refreshServices(grownState: string, gender = 'man'): void {
    const serviceArray = this.form.get('services') as FormArray;
    serviceArray.clear();
    const params = {grown_state: grownState, gender};
    if (gender === 'woman') {
      delete params.grown_state;
    }
    this.services.all(params)
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
