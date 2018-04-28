import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractingDisplayComponent } from './extracting-display.component';

describe('ExtractingDisplayComponent', () => {
  let component: ExtractingDisplayComponent;
  let fixture: ComponentFixture<ExtractingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
