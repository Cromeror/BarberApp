import assert from 'assert';
import app from '../../src/app';

describe('\'tickets\' service', () => {
  it('registered the service', () => {
    const service = app.service('tickets');

    assert.ok(service, 'Registered the service');
  });
});
