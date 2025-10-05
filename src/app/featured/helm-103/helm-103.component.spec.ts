import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helm103Component } from './helm-103.component';

describe('Helm103Component', () => {
  let component: Helm103Component;
  let fixture: ComponentFixture<Helm103Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helm103Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Helm103Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
