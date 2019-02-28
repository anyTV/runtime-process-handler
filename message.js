'use strict';

const moment = require('moment');
const config = require('./config/config');

class Message {

    constructor(raw_message) {
        this.message = raw_message;
    }

    format() {

        return {
            time_occurrence: moment.utc().format(config.DATE_TIME_FORMAT),
            details: this.message,
        };
    }

}

module.exports = Message;
