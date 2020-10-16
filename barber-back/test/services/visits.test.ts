import assert from 'assert';
import app from '../../src/app';

describe('\'visits\' service', () => {
  it('registered the service', () => {
    const service = app.service('users/:id/visits');

    assert.ok(service, 'Registered the service');
  });
});
