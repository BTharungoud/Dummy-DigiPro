import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowMoreCardComponent } from './know-more-card.component';

describe('KnowMoreCardComponent', () => {
  let component: KnowMoreCardComponent;
  let fixture: ComponentFixture<KnowMoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowMoreCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowMoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
