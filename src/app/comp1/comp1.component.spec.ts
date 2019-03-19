import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1Page } from './comp1.page';

describe('Comp1Page', () => {
  let component: Comp1Page;
  let fixture: ComponentFixture<Comp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
