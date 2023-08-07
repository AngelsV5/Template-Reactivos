import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfReactiveComponent } from './inf-reactive.component';

describe('InfReactiveComponent', () => {
  let component: InfReactiveComponent;
  let fixture: ComponentFixture<InfReactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfReactiveComponent]
    });
    fixture = TestBed.createComponent(InfReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
