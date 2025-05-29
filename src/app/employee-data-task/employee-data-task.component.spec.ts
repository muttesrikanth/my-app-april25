import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  // <-- Add this

import { EmployeeDataTaskComponent } from './employee-data-task.component';

describe('EmployeeDataTaskComponent', () => {
  let component: EmployeeDataTaskComponent;
  let fixture: ComponentFixture<EmployeeDataTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDataTaskComponent ],
      imports: [ FormsModule ]  // <-- Import FormsModule here
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDataTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
