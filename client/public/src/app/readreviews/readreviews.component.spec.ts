import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadreviewsComponent } from './readreviews.component';

describe('ReadreviewsComponent', () => {
  let component: ReadreviewsComponent;
  let fixture: ComponentFixture<ReadreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
