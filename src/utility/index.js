import { toast } from 'react-toastify';
import { apiTimeOutLimit, APP_MESSAGES } from './appConstants';

// eslint-disable-next-line import/prefer-default-export
export const fetchWithTimeout = (resource, timeout = apiTimeOutLimit, options) => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), timeout);
  return fetch(resource, {
    signal: controller.signal,
    ...options,
  }).catch(error => {
    toast.error(`${APP_MESSAGES.requestTimedOut}, ${error}`);
  });
};

export const getRandomArbitraryNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const getRandomSize = () => {
  return SIZES[getRandomArbitraryNumber(0, 5)];
};
