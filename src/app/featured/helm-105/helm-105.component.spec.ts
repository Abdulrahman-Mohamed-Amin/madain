import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helm105Component } from './helm-105.component';

describe('Helm105Component', () => {
  let component: Helm105Component;
  let fixture: ComponentFixture<Helm105Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helm105Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Helm105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
