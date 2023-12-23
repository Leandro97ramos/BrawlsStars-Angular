import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrawlersComponent } from './brawlers.component';

describe('BrawlersComponent', () => {
  let component: BrawlersComponent;
  let fixture: ComponentFixture<BrawlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrawlersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrawlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
