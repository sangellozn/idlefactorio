import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftingDisplayComponent } from './crafting-display.component';

describe('CraftingDisplayComponent', () => {
  let component: CraftingDisplayComponent;
  let fixture: ComponentFixture<CraftingDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraftingDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
