import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegDetailsComponent } from './keg-details.component';

describe('KegDetailsComponent', () => {
  let component: KegDetailsComponent;
  let fixture: ComponentFixture<KegDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
