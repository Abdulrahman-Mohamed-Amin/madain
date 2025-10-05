import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helm102Component } from './helm-102.component';

describe('Helm102Component', () => {
  let component: Helm102Component;
  let fixture: ComponentFixture<Helm102Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helm102Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Helm102Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
