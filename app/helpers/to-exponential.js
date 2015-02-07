import Ember from 'ember';

/**
 * to-exponential handlebars helper
 * Convert number into exponential expression
 * Usage: {{to-exponential 110}}
 */
export function toExponential(input) {
  //copied from clickerheroes
  const UNITS = "KMBTqQsSONdUD!@#$%^&*";//[]{};\':\"<>?/\\|~`_=-+";
  var org = input;
  if (input >= Math.pow(10, 5 + 3 * UNITS.length)) {
    return org.toExponential(3).replace("+", "");
  }
  var p = 0;
  while (input >= 100000) {
    input /= 1000;
    p++;
  }
  var str = Math.floor(input).toLocaleString()
  if (p > UNITS.length) {
    return org.toExponential(3).replace("+", "");
  }
  if (p) str += UNITS[p - 1];
  return str;
  //return input > 10000 ? input.toExponential() : input;
}

export default Ember.Handlebars.makeBoundHelper(toExponential);
