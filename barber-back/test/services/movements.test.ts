import assert from 'assert';
import app from '../../src/app';

describe('\'movements\' service', () => {
  it('registered the service', () => {
    const service = app.service('movements');

    assert.ok(service, 'Registered the service');
  });
});
