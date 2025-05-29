import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // 👈 Add this
import { FlipkartComponent } from './flipkart.component';

describe('FlipkartComponent', () => {
  let component: FlipkartComponent;
  let fixture: ComponentFixture<FlipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartComponent ],
      imports: [ HttpClientTestingModule ] // 👈 Add this
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
