'use strict';
const _ = require('lodash');
const moment = require('moment');
const message = require('./message');
const config = require('./config/config');

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
                const time_occurrence = moment.utc().format(config.DATE_TIME_FORMAT);

                this.callback(
                    new message(
                        encountered_error,
                        time_occurrence
                    ).format());
            });
        });
    }
}

module.exports = ErrorReport;
