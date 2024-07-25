import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerMarkentingComponent } from './influencer-markenting.component';

describe('InfluencerMarkentingComponent', () => {
  let component: InfluencerMarkentingComponent;
  let fixture: ComponentFixture<InfluencerMarkentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfluencerMarkentingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfluencerMarkentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
