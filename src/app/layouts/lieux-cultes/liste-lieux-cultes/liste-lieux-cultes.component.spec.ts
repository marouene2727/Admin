import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLieuxCultesComponent } from './liste-lieux-cultes.component';

describe('ListeLieuxCultesComponent', () => {
  let component: ListeLieuxCultesComponent;
  let fixture: ComponentFixture<ListeLieuxCultesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeLieuxCultesComponent]
    });
    fixture = TestBed.createComponent(ListeLieuxCultesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
