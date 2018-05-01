import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityDisplayComponent } from './electricity-display.component';

describe('ElectricityDisplayComponent', () => {
  let component: ElectricityDisplayComponent;
  let fixture: ComponentFixture<ElectricityDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
