'use strict';

const moment = require('moment');

const config = require('./config/config');

class Message {

    constructor(
        raw_message,
        time
    ) {

        if(!moment(time, config.DATE_TIME_FORMAT, true).isValid()) {
            time = moment.utc().format(config.DATE_TIME_FORMAT);
        }

        this.message = raw_message;
        this.time = time;
    }

    format() {

        return {
            time: this.time,
            details: this.message,
        };
    }

}

module.exports = Message;
