import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';  // <-- Import this

import { ParentTaskComponent } from './parent-task.component';

describe('ParentTaskComponent', () => {
  let component: ParentTaskComponent;
  let fixture: ComponentFixture<ParentTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentTaskComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // <-- Add this line to suppress unknown element errors
    }).compileComponents();

    fixture = TestBed.createComponent(ParentTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
