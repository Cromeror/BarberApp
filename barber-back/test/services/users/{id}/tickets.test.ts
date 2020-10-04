import assert from 'assert';
import app from '../../../../src/app';

describe('\'users/:id/tickets\' service', () => {
  it('registered the service', () => {
    const service = app.service('users/{id}/tickets');

    assert.ok(service, 'Registered the service');
  });
});
