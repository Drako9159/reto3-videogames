import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopulateComponent } from './most-populate.component';

describe('MostPopulateComponent', () => {
  let component: MostPopulateComponent;
  let fixture: ComponentFixture<MostPopulateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostPopulateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostPopulateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
