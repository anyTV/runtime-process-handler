'use strict';
const _ = require('lodash');

class ErrorReport {

    constructor (
        process,
        config,
        callback
    ) {

        if(!_.isArray(config)) {
            config = _.toArray(config);
        }

        this.process = process;
        this.config = config;
        this.callback = callback;
    }

    start() {
        _.forEach(this.config, _error => {
            console.log('Starting ', _error, ' listener from zeref');

            this.process.on(_error, (encountered_error) => {

                this.callback(this.format_report(encountered_error));
            });
        });
    }

    format_report(_error) {
        /** TODO:
         * 1. Format error report message.
         *  - Must provide report time
         *  - Must provide what project does the error happened
         *  - Must provide what file an error occurred
         * **/
        return 'FORMATTED ERROR';
    }
}

module.exports = ErrorReport;
