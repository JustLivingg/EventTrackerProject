import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkincareListComponent } from './skincare-list.component';

describe('SkincareListComponent', () => {
  let component: SkincareListComponent;
  let fixture: ComponentFixture<SkincareListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkincareListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkincareListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
