import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2cliAppComponent } from '../app/ng2cli.component';

beforeEachProviders(() => [Ng2cliAppComponent]);

describe('App: Ng2cli', () => {
  it('should create the app',
      inject([Ng2cliAppComponent], (app: Ng2cliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2cli works!\'',
      inject([Ng2cliAppComponent], (app: Ng2cliAppComponent) => {
    expect(app.title).toEqual('ng2cli works!');
  }));
});
