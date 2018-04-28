import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInfoDisplayComponent } from './stock-info-display.component';

describe('StockInfoDisplayComponent', () => {
  let component: StockInfoDisplayComponent;
  let fixture: ComponentFixture<StockInfoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockInfoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
