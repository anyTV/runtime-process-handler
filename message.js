'use strict';

const moment = require('moment');

class Message {

    constructor(raw_message, sender) {
        this.message = raw_message;
        this.sender = sender;
    }

    format() {

        return {
            time_happened: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
            destination: this.sender,
            details: this.message,
        };
    }

}

module.exports = Message;
