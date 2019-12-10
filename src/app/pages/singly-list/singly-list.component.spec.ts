import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglyListComponent } from './singly-list.component';

describe('SinglyListComponent', () => {
  let component: SinglyListComponent;
  let fixture: ComponentFixture<SinglyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
