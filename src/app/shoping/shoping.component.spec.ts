import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // 👈 Import FormsModule
import { ShopingComponent } from './shoping.component';

describe('ShopingComponent', () => {
  let component: ShopingComponent;
  let fixture: ComponentFixture<ShopingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingComponent ],
      imports: [ FormsModule ] // 👈 Include FormsModule here
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
