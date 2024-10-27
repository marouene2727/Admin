import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLieuxTouristiquesComponent } from './liste-lieux-touristiques.component';

describe('ListeLieuxTouristiquesComponent', () => {
  let component: ListeLieuxTouristiquesComponent;
  let fixture: ComponentFixture<ListeLieuxTouristiquesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeLieuxTouristiquesComponent]
    });
    fixture = TestBed.createComponent(ListeLieuxTouristiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
