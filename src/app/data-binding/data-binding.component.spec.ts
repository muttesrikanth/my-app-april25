import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // 👈 Add this
import { DataBindingComponent } from './data-binding.component';

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingComponent ],
      imports: [ FormsModule ] // 👈 Add FormsModule
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
