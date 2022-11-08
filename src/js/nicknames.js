export default class Validator {
  validateUsername(username) {
    const patternOne = /[a-z]/i.test(username);
    const patternTwo = /^[a-zA-Z]+[\w-]*[^\d_-\W]$/.test(username);
    const patternTree = /[\d]{3,}/.test(username);
    if ((username.length === 1 && patternOne) || (patternTwo && !patternTree)) {
      this.username = username;
      return true;
    }
    throw new Error('Вы ввели некоректное имя');
  }
}
