import Ember from 'ember';

/**
 * to-exponential handlebars helper
 * Convert number into exponential expression
 * Usage: {{to-exponential 110}}
 */
export function toExponential(input) {
  return input > 10000 ? input.toExponential() : input;
}

export default Ember.Handlebars.makeBoundHelper(toExponential);
