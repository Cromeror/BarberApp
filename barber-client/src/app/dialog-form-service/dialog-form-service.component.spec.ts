import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormServiceComponent } from './dialog-form-service.component';

describe('DialogFormServiceComponent', () => {
  let component: DialogFormServiceComponent;
  let fixture: ComponentFixture<DialogFormServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFormServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFormServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
