import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Add ReactiveFormsModule here

import { CustomLoginComponent } from './custom-login.component';

describe('CustomLoginComponent', () => {
  let component: CustomLoginComponent;
  let fixture: ComponentFixture<CustomLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLoginComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule  // <-- Add ReactiveFormsModule here
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
