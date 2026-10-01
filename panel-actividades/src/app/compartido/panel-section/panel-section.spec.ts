import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelSection } from './panel-section';

describe('PanelSection', () => {
  let component: PanelSection;
  let fixture: ComponentFixture<PanelSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelSection],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
