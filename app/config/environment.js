var _ = require('lodash');

var localEnvVars = {
  TITLE:      'shadedhues_prints',
  SAFE_TITLE: 'shadedhues_prints'
};

require('dotenv').load();

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
