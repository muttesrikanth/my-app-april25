import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';  // <-- Import ReactiveFormsModule

import { AddIdCardComponent } from './add-id-card.component';

describe('AddIdCardComponent', () => {
  let component: AddIdCardComponent;
  let fixture: ComponentFixture<AddIdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIdCardComponent ],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule  // <-- Add ReactiveFormsModule here
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'mockValue'
              }
            },
            params: of({ id: '123' }),
            queryParams: of({ q: 'test' })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddIdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
