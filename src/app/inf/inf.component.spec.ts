import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfComponent } from './inf.component';

describe('InfComponent', () => {
  let component: InfComponent;
  let fixture: ComponentFixture<InfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfComponent]
    });
    fixture = TestBed.createComponent(InfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
