import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrawlerDetailComponent } from './brawler-detail.component';

describe('BrawlerDetailComponent', () => {
  let component: BrawlerDetailComponent;
  let fixture: ComponentFixture<BrawlerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrawlerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrawlerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
