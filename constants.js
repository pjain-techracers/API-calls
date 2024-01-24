const APP_CONSTANTS = {
  ERRORS: Object.freeze({
    NOT_FOUND: 'Not found.',
    SOMETHING_WENT_WRONG: 'Something went wrong.',
    MISSING_REQUIRED_FIELDS: 'Parent or Label cannot be empty'
  }),
  STATUS: Object.freeze({
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
  })
};

module.exports = Object.freeze(APP_CONSTANTS);
