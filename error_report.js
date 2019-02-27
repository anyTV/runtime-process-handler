'use strict';
const _ = require('lodash');

class ErrorReport {

    constructor (
        process,
        config,
        handler
    ) {

        if(!_.isArray(config)) {
            config = _.toArray(config);
        }

        this.process = process;
        this.config = config;
        this.handler = handler;
    }

    start() {
        _.forEach(this.config, _error => {
            console.log('Starting ', _error, ' listener from zeref');
            this.process.on(_error, (encountered_error) => {
                this.handler(this.format_report(encountered_error));
            });
        });
    }

    format_report(_error) {
        /** attach all information **/
        return 'FORMATTED ERROR';
    }

    when() {
        /** should append time happened **/
    }

    where() {
        /** should append where it happened (or what project) **/
    }

}

module.exports = ErrorReport;
