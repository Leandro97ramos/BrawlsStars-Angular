import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIconBrawlsComponent } from './card-icon-brawls.component';

describe('CardIconBrawlsComponent', () => {
  let component: CardIconBrawlsComponent;
  let fixture: ComponentFixture<CardIconBrawlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIconBrawlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIconBrawlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
