import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // <-- Add this

import { MailComponent } from './mail.component';

describe('MailComponent', () => {
  let component: MailComponent;
  let fixture: ComponentFixture<MailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailComponent ],
      imports: [ HttpClientTestingModule ]  // <-- Add HttpClientTestingModule here
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
