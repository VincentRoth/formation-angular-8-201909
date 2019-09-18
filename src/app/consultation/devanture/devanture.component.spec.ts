import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevantureComponent } from './devanture.component';

describe('DevantureComponent', () => {
  let component: DevantureComponent;
  let fixture: ComponentFixture<DevantureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevantureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevantureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
