import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Helm104Component } from './helm-104.component';

describe('Helm104Component', () => {
  let component: Helm104Component;
  let fixture: ComponentFixture<Helm104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Helm104Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Helm104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
