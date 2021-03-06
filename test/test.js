'use strict';

const assert = require('chai').assert;

const _process = require('../process');
const message = require('../message');

const dummy_data = require('./dummy_data');

describe('Runtime Process Monitoring', () => {

    describe('Process Class', () => {

        it('should run the callback when an event has been triggered', async () => {

            let test_callback = (message) => {

                assert.equal(message.details.message, dummy_data.formatted_message.details);
            };

            let process_instance = new _process(
                process,
                dummy_data.process_requirements.config,
                test_callback
            );

            process_instance.start();

            Promise
                .resolve( 'Test resolve' )
                .then(() => {
                        throw(new Error(dummy_data.formatted_message.details));
                    }
                );

        });

    });

    describe('Message Class', () => {

        it('should assign global var message and time in constructor', (done) => {
            let _message = new message(
                dummy_data.formatted_message.details,
                dummy_data.formatted_message.time);

            assert.equal(_message.message, dummy_data.formatted_message.details);
            assert.equal(_message.time, dummy_data.formatted_message.time);

            done();
        });

        it('should generate valid date time if passed with invalid one', (done) => {
            let _message = new message(
                dummy_data.formatted_message.details,
                'RANDOM STUFF'
            );

            assert.notEqual(_message.time, undefined);
            assert.notEqual(_message.time, {});

            done();
        });

        it('should format a message with time and details', (done) => {
            let formatted_message = new message(
                dummy_data.formatted_message.details,
                dummy_data.formatted_message.time
            ).format();

            assert.deepEqual(formatted_message, dummy_data.formatted_message);

            done();
        });

    });

});
