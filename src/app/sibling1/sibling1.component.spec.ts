import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

import { Sibling1Component } from './sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component'; // <-- Import sibling component

describe('Sibling1Component', () => {
  let component: Sibling1Component;
  let fixture: ComponentFixture<Sibling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sibling1Component, Sibling2Component ],  // <-- Declare both components
      imports: [ FormsModule ]  // <-- Add FormsModule here
    }).compileComponents();

    fixture = TestBed.createComponent(Sibling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
