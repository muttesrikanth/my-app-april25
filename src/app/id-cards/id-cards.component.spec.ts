import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // <-- Add this
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IdCardsComponent } from './id-cards.component';

describe('IdCardsComponent', () => {
  let component: IdCardsComponent;
  let fixture: ComponentFixture<IdCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule], // <-- Add FormsModule here
      declarations: [ IdCardsComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(IdCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
