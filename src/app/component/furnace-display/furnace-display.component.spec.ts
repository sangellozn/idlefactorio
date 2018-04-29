import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnaceDisplayComponent } from './furnace-display.component';

describe('FurnaceDisplayComponent', () => {
  let component: FurnaceDisplayComponent;
  let fixture: ComponentFixture<FurnaceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnaceDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnaceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
