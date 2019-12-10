import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxBinaryHeapComponent } from './max-binary-heap.component';

describe('MaxBinaryHeapComponent', () => {
  let component: MaxBinaryHeapComponent;
  let fixture: ComponentFixture<MaxBinaryHeapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxBinaryHeapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxBinaryHeapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
