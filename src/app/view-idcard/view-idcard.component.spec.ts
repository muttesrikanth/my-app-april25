import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Add this
import { ViewIdcardComponent } from './view-idcard.component';

describe('ViewIdcardComponent', () => {
  let component: ViewIdcardComponent;
  let fixture: ComponentFixture<ViewIdcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIdcardComponent ],
      imports: [ HttpClientTestingModule ], // ✅ Add this
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),
            snapshot: { paramMap: { get: () => '123' } }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewIdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
