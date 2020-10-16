import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsManagementComponent } from './settings-management.component';

describe('SettingsComponent', () => {
  let component: SettingsManagementComponent;
  let fixture: ComponentFixture<SettingsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
