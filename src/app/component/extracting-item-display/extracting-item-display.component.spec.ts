import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractingItemDisplayComponent } from './extracting-item-display.component';

describe('ExtractingItemDisplayComponent', () => {
  let component: ExtractingItemDisplayComponent;
  let fixture: ComponentFixture<ExtractingItemDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractingItemDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractingItemDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
