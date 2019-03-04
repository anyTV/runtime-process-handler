'use strict';

class Message {

    constructor(
        raw_message,
        time
    ) {
        this.message = raw_message;
        this.time = time
    }

    format() {

        return {
            time: this.time,
            details: this.message,
        };
    }

}

module.exports = Message;
