'use strict';

class Message {

    constructor(
        raw_message,
        time_occurrence
    ) {
        this.message = raw_message;
        this.time_occurrence = time_occurrence
    }

    format() {

        return {
            time_occurrence: this.time_occurrence,
            details: this.message,
        };
    }

}

module.exports = Message;
