import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterbuttonsComponent } from './couterbuttons.component';

describe('CouterbuttonsComponent', () => {
  let component: CouterbuttonsComponent;
  let fixture: ComponentFixture<CouterbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouterbuttonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouterbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
