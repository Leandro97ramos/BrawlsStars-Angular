import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollInfiniteComponent } from './scroll-infinite.component';

describe('ScrollInfiniteComponent', () => {
  let component: ScrollInfiniteComponent;
  let fixture: ComponentFixture<ScrollInfiniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollInfiniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollInfiniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
