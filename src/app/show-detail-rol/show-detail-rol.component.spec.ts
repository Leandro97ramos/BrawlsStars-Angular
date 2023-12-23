import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailRolComponent } from './show-detail-rol.component';

describe('ShowDetailRolComponent', () => {
  let component: ShowDetailRolComponent;
  let fixture: ComponentFixture<ShowDetailRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDetailRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
