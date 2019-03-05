'use strict';

const _ = require('lodash');
const moment = require('moment');
const serialize_error = require('serialize-error');

const message = require('./message');
const config = require('./config/config');

class Process {

    constructor(
        process,
        config,
        callback
    ) {

        if (!_.isArray(config)) {
            config = _.toArray(config);
        }

        this.process = process;
        this.config = config;
        this.callback = callback;
    }

    start() {
        _.forEach(this.config, event => {

            this.process.on(event, (event_callback) => {
                const response_time = moment.utc().format(config.DATE_TIME_FORMAT);

                if (event_callback instanceof Error) {

                    event_callback = serialize_error(event_callback);
                }

                this.callback(
                    new message(
                        event_callback,
                        response_time
                    ).format());
            });
        });
    }
}

module.exports = Process;
