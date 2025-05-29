import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // 👈 Import FormsModule
import { CircleComponent } from './circle.component';

describe('CircleComponent', () => {
  let component: CircleComponent;
  let fixture: ComponentFixture<CircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleComponent ],
      imports: [ FormsModule ] // 👈 Add FormsModule here
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
