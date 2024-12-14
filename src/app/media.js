// media.js
import { breakpoints } from './breakpoints';

export const mq = Object.keys(breakpoints).reduce((acc, key) => {
  acc[key] = `@media (min-width: ${breakpoints[key]})`;
  return acc;
}, {});
