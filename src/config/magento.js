/**
 * Magento Settings for the app,
 * Follow instructions: https://github.com/troublediehard/magento-react-native/wiki/Setup
 *
 * url                     : Base url of the magento website
 * home_cms_block_id       : Block id which contain json data,
 *                           which will be shown in Home screen
 * access_token            : Token to access magento API, without it
 *                           app won't work
 */
export const magentoOptions = {
  url: 'https://my24.dhdintl.com/', // make sure you have trail slash in the end
  home_cms_block_id: '9',
  store: 'default', // store code // Stores > All Stores > Store View > Code
  authentication: {
    integration: {
      access_token: 'oruv4e92mm6o90y6645dyeei5l1htsxl', //
    },
  },
  reviewEnabled: false, // set true ONLY if you install https://github.com/troublediehard/mma-customapi on the magento backend
};
//test
/**
 * Magento 2 REST API doesn't return currency symbol,
 * so manually specify all currency symbol(that your store support)
 * along side their currency code.
 */
export const currencySymbols = Object.freeze({
  USD: '$',
  EUR: '€',
  AUD: 'A$',
  GBP: '£',
  CAD: 'CA$',
  CNY: 'CN¥',
  JPY: '¥',
  SEK: 'SEK',
  CHF: 'CHF',
  INR: '₹',
  KWD: 'د.ك',
  RON: 'RON',
});
