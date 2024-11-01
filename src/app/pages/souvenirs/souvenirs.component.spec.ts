import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouvenirsComponent } from './souvenirs.component';

describe('SouvenirsComponent', () => {
  let component: SouvenirsComponent;
  let fixture: ComponentFixture<SouvenirsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SouvenirsComponent]
    });
    fixture = TestBed.createComponent(SouvenirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
