import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helm101Component } from './helm-101.component';

describe('Helm101Component', () => {
  let component: Helm101Component;
  let fixture: ComponentFixture<Helm101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helm101Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Helm101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
