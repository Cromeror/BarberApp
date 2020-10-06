import {Component, Input} from '@angular/core';
import {User} from '../api/user.service';

@Component({
  selector: 'app-item-position',
  templateUrl: './item-position.component.html',
  styleUrls: ['./item-position.component.scss']
})
export class ItemPositionComponent {
  @Input() position: number;
  @Input() user: User;
}
