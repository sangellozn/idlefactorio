import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionDisplayComponent } from './production-display.component';

describe('ProductionDisplayComponent', () => {
  let component: ProductionDisplayComponent;
  let fixture: ComponentFixture<ProductionDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
