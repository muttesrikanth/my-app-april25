import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // ✅

import { CommunicationComponent } from './communication.component';

describe('CommunicationComponent', () => {
  let component: CommunicationComponent;
  let fixture: ComponentFixture<CommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunicationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // ✅ add this line
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
