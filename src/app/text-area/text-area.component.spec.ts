import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  // <-- Add FormsModule for ngModel

import { TextAreaComponent } from './text-area.component';
import { InrPipe } from '../inr.pipe';

describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAreaComponent, InrPipe ],  // Declare your pipe here
      imports: [ FormsModule ]  // <-- Add FormsModule here for ngModel
    }).compileComponents();

    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
