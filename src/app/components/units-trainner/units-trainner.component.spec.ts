import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsTrainnerComponent } from './units-trainner.component';

describe('UnitsTrainnerComponent', () => {
  let component: UnitsTrainnerComponent;
  let fixture: ComponentFixture<UnitsTrainnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitsTrainnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnitsTrainnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
