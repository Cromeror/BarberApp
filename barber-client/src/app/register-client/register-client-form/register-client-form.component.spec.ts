import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterClientFormComponent } from './register-client-form.component';

describe('RegisterClientFormComponent', () => {
  let component: RegisterClientFormComponent;
  let fixture: ComponentFixture<RegisterClientFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterClientFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
