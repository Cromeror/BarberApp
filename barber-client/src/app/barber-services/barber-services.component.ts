import {Component} from '@angular/core';

@Component({
  selector: 'app-barber-services',
  templateUrl: './barber-services.component.html',
  styleUrls: ['./barber-services.component.scss']
})
export class BarberServicesComponent {
  currentServices = [
    {
      id: '1',
      service: 'Corte Completo',
      price: 10000
    },
    {
      id: '2',
      service: 'Corte sencillo',
      price: 8000
    },
    {
      id: '3',
      service: 'Barba',
      price: 4000
    },
    {
      id: '4',
      service: 'Cerquillo',
      price: 1000
    }
  ];

  constructor() {
  }
}
