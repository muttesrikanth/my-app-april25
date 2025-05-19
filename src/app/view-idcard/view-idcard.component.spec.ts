import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIdcardComponent } from './view-idcard.component';

describe('ViewIdcardComponent', () => {
  let component: ViewIdcardComponent;
  let fixture: ComponentFixture<ViewIdcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIdcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewIdcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
