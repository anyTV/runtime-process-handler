'use strict';
const _ = require('lodash');
const message = require('./message');

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

                this.callback(new message(encountered_error).format());
            });
        });
    }
}

module.exports = ErrorReport;
