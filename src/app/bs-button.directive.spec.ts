/* tslint:disable:no-unused-variable */
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BsButtonDirective } from './bs-button.directive';

@Component({
  template: `
  <button id="test0">Normal...</button>
  <button id="test1" bsButton>info</button>
  <button id="test2" bsButton defaultClass="danger">Custom default class</button>
  <button id="test3" bsButton defaultClass="danger" hoverClass="success">Custom default & hover class</button>
  `
})
class TestComponent { }

describe('Directive: BsButton', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BsButtonDirective, TestComponent]
    })
      .createComponent(TestComponent);
    fixture.detectChanges();
  });

  it('should have "bs" class for all element wtih bsButton directive', () => {
    const target = fixture.debugElement.queryAll(By.directive(BsButtonDirective));
    const expected = target.length;
    const actual = target.filter((el) => (el.nativeNode as HTMLElement).classList.contains('btn')).length;
    expect(expected).toBe(actual);
  });

  it('should have default class: btn-info', () => {
    const target = fixture.debugElement.query(By.css('#test1')).nativeElement as HTMLElement;

    expect(target.classList.contains('btn-info')).toBeTruthy('default class is btn-info');
  });

  it('should have default class: btn-danger when mouseenter', () => {
    const target = fixture.debugElement.query(By.css('#test1'));
    target.triggerEventHandler('mouseenter', target);

    expect((target.nativeElement as HTMLElement).classList).toContain('btn-danger');
  });

  it('should restore default button class: btn-info when mouseleave', () => {
    const target = fixture.debugElement.query(By.css('#test1'));
    target.triggerEventHandler('mouseenter', target);

    expect((target.nativeElement as HTMLElement).classList).toContain('btn-danger');

    target.triggerEventHandler('mouseleave', target);

    expect((target.nativeElement as HTMLElement).classList).toContain('btn-info');
  });

  it('can be set custom button class', () => {
    const target = fixture.debugElement.query(By.css('#test2')).nativeElement as HTMLElement;

    expect(target.classList.contains('btn-danger')).toBeTruthy('custom button class');
  });

  it('can be set custom button class when mouseleave', () => {
    const target = fixture.debugElement.query(By.css('#test3'));

    target.triggerEventHandler('mouseenter', target);

    expect((target.nativeElement as HTMLElement).classList).toContain('btn-success');

    target.triggerEventHandler('mouseleave', target);

    expect((target.nativeElement as HTMLElement).classList).toContain('btn-danger');
  });
});
