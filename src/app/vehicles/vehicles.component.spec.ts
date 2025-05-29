import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';               // <-- import this
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VehiclesComponent } from './vehicles.component';

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclesComponent ],
      imports: [ HttpClientTestingModule, FormsModule ]   // <-- add FormsModule here
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
