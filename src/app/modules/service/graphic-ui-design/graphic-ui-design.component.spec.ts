import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicUiDesignComponent } from './graphic-ui-design.component';

describe('GraphicUiDesignComponent', () => {
  let component: GraphicUiDesignComponent;
  let fixture: ComponentFixture<GraphicUiDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicUiDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicUiDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
