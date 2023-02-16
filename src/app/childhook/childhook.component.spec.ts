import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildhookComponent } from './childhook.component';

describe('ChildhookComponent', () => {
  let component: ChildhookComponent;
  let fixture: ComponentFixture<ChildhookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildhookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
