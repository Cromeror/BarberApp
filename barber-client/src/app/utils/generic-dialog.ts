import {EventEmitter, Input, Output} from '@angular/core';

export class GenericDialog {
  @Input() isVisible = false;
  @Input() title = '';
  @Output() closedEvent = new EventEmitter<boolean>();
  @Output() okEvent = new EventEmitter<number>();

  close(): void {
    this.closedEvent.emit(this.isVisible);
  }

  handleOk(): void {
    this.closedEvent.emit(this.isVisible);
  }
}
