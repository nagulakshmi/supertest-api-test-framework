global.request = require('supertest');
global.chai = require('chai');
chai.use(require('chai-exclude'));
global.assert = chai.assert;
global.expect = chai.expect;
global.mysql = require('mysql');

global.dbConnection = require('../utils/db.js');
global.util = require('../utils/util.js');
global.httprequest = require('../utils/https.js');





