import React from 'react';

import { TimePicker } from '../../../index';

Demo.parameters = {
    chromatic: { disableSnapshot: true },
}

export default function Demo() {
    const createLog = (event, cb) => {
        return function log(...args) {
            console.log(`${event}: `, ...args);

            if (typeof cb === 'function') {
                cb(...args);
            }
        };
    };

    return (
        <TimePicker
            defaultValue={new Date()}
            onBlur={createLog('onBlur')}
            onFocus={createLog('onFocus')}
            onChange={createLog('onChange')}
        />
    );
}
