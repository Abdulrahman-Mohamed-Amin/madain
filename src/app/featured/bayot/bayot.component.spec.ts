import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BayotComponent } from './bayot.component';

describe('BayotComponent', () => {
  let component: BayotComponent;
  let fixture: ComponentFixture<BayotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BayotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BayotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
