import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
  injectAsync
} from '@angular/core/testing';

import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ViewSingleComponent } from './view-single.component';

describe('Component: ViewSingle', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ViewSingleComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ViewSingleComponent],
      (component: ViewSingleComponent) => {
    expect(component).toBeTruthy();
  }));

  // it('should have ', inject([ViewSingleComponent],
  //     (component: ViewSingleComponent) => {
  //   expect(component).toBeTruthy();
  // }));

  beforeEach(function() {
    this.vsc = new ViewSingleComponent();
  });

  it('should have hello property', function() {
    expect(this.vsc.id).toBe('router');
  });


  it('should create the component', inject([], () => {
    return builder.createAsync(ViewSingleComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ViewSingleComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));

  // it('should render', inject([], () => {
  //   return builder.createAsync(ViewSingleComponentTestController)
  //     .then((fixture: ComponentFixture<any>) => {
  //       let query = fixture.debugElement.query(By.directive(ViewSingleComponent));
  //       expect(query).toBeTruthy();
  //       expect(query.componentInstance).toBeTruthy();
  //     });
  // }));
  //
  //
  // it('should render list', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
  //   return tcb.createAsync(ViewSingleComponent).then((componentFixture: ComponentFixture) => {
  //     const element = componentFixture.nativeElement;
  //     componentFixture.componentInstance.users = ['John'];
  //     componentFixture.detectChanges();
  //     expect(element.querySelectorAll('span').length).toBe(1);
  //   });
  // }));
});

@Component({
  selector: 'test',
  template: `
    <app-view-single></app-view-single>
  `,
  directives: [ViewSingleComponent]
})
class ViewSingleComponentTestController {
}

