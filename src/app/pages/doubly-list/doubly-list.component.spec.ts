import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublyListComponent } from './doubly-list.component';

describe('DoublyListComponent', () => {
  let component: DoublyListComponent;
  let fixture: ComponentFixture<DoublyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
