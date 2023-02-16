import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouteroutputComponent } from './couteroutput.component';

describe('CouteroutputComponent', () => {
  let component: CouteroutputComponent;
  let fixture: ComponentFixture<CouteroutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouteroutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouteroutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
