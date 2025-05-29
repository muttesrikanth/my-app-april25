import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { CreateVehicleComponent } from './create-vehicle.component';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('CreateVehicleComponent', () => {
  let component: CreateVehicleComponent;
  let fixture: ComponentFixture<CreateVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVehicleComponent ],
      imports: [ HttpClientTestingModule ,ReactiveFormsModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'mockValue'  // mock any paramMap.get calls
              }
            },
            params: of({}),           // mock params observable
            queryParams: of({})       // mock queryParams observable if used
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
