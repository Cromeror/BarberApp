import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PaginateUser} from '../api/user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <nz-list nzItemLayout="horizontal">
      <nz-list-item *ngFor="let users of users?.data">
        <nz-list-item-meta nzAvatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png">
          <nz-list-item-meta-title>
            <span (click)="selectedEvent.emit(users)">{{ users.name }} {{ users.last_name }}</span>
          </nz-list-item-meta-title>
        </nz-list-item-meta>
      </nz-list-item>
      <nz-list-empty *ngIf="users?.data.length === 0"></nz-list-empty>
    </nz-list>`,
  styles: []
})
export class UserListComponent {
  @Input() users: PaginateUser;
  @Output() selectedEvent = new EventEmitter();
}
