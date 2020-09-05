import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.scss']
})
export class RegisterClientComponent {
  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  successRegister(): void {
    const {back} = this.activatedRoute.snapshot.queryParams;
    if (back) {
      this.router.navigate([back]).then();
    }
  }
}
