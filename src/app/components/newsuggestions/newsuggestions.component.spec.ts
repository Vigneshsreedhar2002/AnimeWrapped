import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsuggestionsComponent } from './newsuggestions.component';

describe('NewsuggestionsComponent', () => {
  let component: NewsuggestionsComponent;
  let fixture: ComponentFixture<NewsuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsuggestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
