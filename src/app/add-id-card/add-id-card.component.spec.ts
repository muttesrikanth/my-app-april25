import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIdCardComponent } from './add-id-card.component';

describe('AddIdCardComponent', () => {
  let component: AddIdCardComponent;
  let fixture: ComponentFixture<AddIdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIdCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
