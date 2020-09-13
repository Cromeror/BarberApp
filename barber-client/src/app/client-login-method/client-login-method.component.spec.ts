import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLoginMethodComponent } from './client-login-method.component';

describe('ClientLoginMethodComponent', () => {
  let component: ClientLoginMethodComponent;
  let fixture: ComponentFixture<ClientLoginMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLoginMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLoginMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
