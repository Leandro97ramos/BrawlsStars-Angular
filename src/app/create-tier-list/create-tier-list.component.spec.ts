import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTierListComponent } from './create-tier-list.component';

describe('CreateTierListComponent', () => {
  let component: CreateTierListComponent;
  let fixture: ComponentFixture<CreateTierListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTierListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
