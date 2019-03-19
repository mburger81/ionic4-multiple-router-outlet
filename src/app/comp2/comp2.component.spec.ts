import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2Page } from './comp2.page';

describe('Comp2Page', () => {
  let component: Comp2Page;
  let fixture: ComponentFixture<Comp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
