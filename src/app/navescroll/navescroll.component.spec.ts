import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavescrollComponent } from './navescroll.component';

describe('NavescrollComponent', () => {
  let component: NavescrollComponent;
  let fixture: ComponentFixture<NavescrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavescrollComponent]
    });
    fixture = TestBed.createComponent(NavescrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
