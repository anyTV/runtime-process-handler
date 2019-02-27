'use strict';

const moment = require('moment');

class Message {

    constructor(raw_message, project) {
        this.message = raw_message;
        this.project = project;
    }

    format() {

        return {
            time_happened: moment.format('YYYY-MM-DD HH:mm:ss'),
            project: this.project,
            details: this.message,
        };
    }

}

module.exports = Message;
