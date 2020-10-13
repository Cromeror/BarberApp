import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEndingServiceComponent } from './dialog-ending-service.component';

describe('DialogEndingServiceComponent', () => {
  let component: DialogEndingServiceComponent;
  let fixture: ComponentFixture<DialogEndingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEndingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEndingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
