const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

// Export the configured chai instance for use in tests
module.exports = chai;
