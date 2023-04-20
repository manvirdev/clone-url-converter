const { convert } = require('../index');

test('converts https clone URL to SSH', () => {
  const httpsLink = 'https://github.com/username/repo.git';
  const sshLink = convert(httpsLink);
  expect(sshLink).toBe('git@github.com:username/repo.git');
});

test('converts SSH clone URL to https', () => {
  const sshLink = 'git@github.com:username/repo.git';
  const httpsLink = convert(sshLink);
  expect(httpsLink).toBe('https://github.com/username/repo.git');
});

test('throws error for invalid URL', () => {
  expect(() => convert('invalid-url')).toThrow('Invalid string input for the method: convertString in package httptosshconverter');
});