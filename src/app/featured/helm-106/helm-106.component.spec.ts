import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helm106Component } from './helm-106.component';

describe('Helm106Component', () => {
  let component: Helm106Component;
  let fixture: ComponentFixture<Helm106Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helm106Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Helm106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
