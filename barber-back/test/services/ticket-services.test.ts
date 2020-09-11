import assert from 'assert';
import app from '../../src/app';

describe('\'ticketServices\' service', () => {
  it('registered the service', () => {
    const service = app.service('ticket-services');

    assert.ok(service, 'Registered the service');
  });
});
