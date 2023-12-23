import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailBrawlComponent } from './show-detail-brawl.component';

describe('ShowDetailBrawlComponent', () => {
  let component: ShowDetailBrawlComponent;
  let fixture: ComponentFixture<ShowDetailBrawlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailBrawlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailBrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
