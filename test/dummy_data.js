'use strict';

const dummy_data = {

    formatted_message: {
        time: '2019-03-06T09:31:15.257Z',
        details: 'Test details'
    },

    process_requirements: {
        config: ['unhandledRejection'],
        callback: () => { console.log('Callback called.') }
    }

};

module.exports = dummy_data;
