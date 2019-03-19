import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3Page } from './comp3.page';

describe('Comp3Page', () => {
  let component: Comp3Page;
  let fixture: ComponentFixture<Comp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
