import Validator from '../nicknames';

test('special symbol', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('admin#user')).toThrow();
});

test('invalid username', () => {
  const validated = new Validator();
  expect(validated.validateUsername('admin_55-super')).toBeTruthy();
});

test('more than 3 numbers', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('super8888giper')).toThrow();
});

test('end name numbers', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('admin777')).toThrow();
});

test('first symbol -', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('-hero')).toThrow();
});

test('end symbol _', () => {
  const validated = new Validator();
  expect(() => validated.validateUsername('max_')).toThrow();
});

test('one symbol', () => {
  const validated = new Validator();
  expect(validated.validateUsername('X')).toBeTruthy();
});
