import {Component, TemplateRef, ViewChild} from '@angular/core';
import {PaginateService, Service, ServicesService} from '../../api/services.service';

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.scss']
})
export class ServiceManagementComponent {
  @ViewChild('template') template: TemplateRef<any>;

  servicesList: PaginateService;
  showModal: boolean;
  modalTitle: string;
  values: Service;

  constructor(public servicesService: ServicesService) {
    this.refreshServices();
  }

  refreshServices(): void {
    this.servicesService.all().subscribe((services: PaginateService) => this.servicesList = services);
  }
}
