import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusItemDisplayComponent } from './bonus-item-display.component';

describe('BonusItemDisplayComponent', () => {
  let component: BonusItemDisplayComponent;
  let fixture: ComponentFixture<BonusItemDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonusItemDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
