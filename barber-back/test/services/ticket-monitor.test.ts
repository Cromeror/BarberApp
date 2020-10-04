import assert from 'assert';
import app from '../../src/app';

describe('\'ticket-monitor\' service', () => {
  it('registered the service', () => {
    const service = app.service('ticket-monitor');

    assert.ok(service, 'Registered the service');
  });
});
