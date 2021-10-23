import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HottakesComponent } from './hottakes.component';

describe('HottakesComponent', () => {
  let component: HottakesComponent;
  let fixture: ComponentFixture<HottakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HottakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HottakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
