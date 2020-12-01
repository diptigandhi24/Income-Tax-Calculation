import login from './loginresponse';

describe('testing the login response', () => {
  test('Response Success', () => {
    return login('medly', 'test').then(response => {
      expect(response).toStrictEqual({ login: true, id: 111 });
    });
  });
  test('Response Fail', () => {
    return login('medly', 'test11').then(response => {
      expect(response).toStrictEqual({ login: false, id: null });
    });
  });
});
