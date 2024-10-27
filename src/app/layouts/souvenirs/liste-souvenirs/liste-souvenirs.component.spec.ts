import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSouvenirsComponent } from './liste-souvenirs.component';

describe('ListeSouvenirsComponent', () => {
  let component: ListeSouvenirsComponent;
  let fixture: ComponentFixture<ListeSouvenirsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeSouvenirsComponent]
    });
    fixture = TestBed.createComponent(ListeSouvenirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
