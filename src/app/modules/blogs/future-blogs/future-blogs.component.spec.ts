import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureBlogsComponent } from './future-blogs.component';

describe('FutureBlogsComponent', () => {
  let component: FutureBlogsComponent;
  let fixture: ComponentFixture<FutureBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FutureBlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FutureBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
