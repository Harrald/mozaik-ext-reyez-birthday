import React, { Component, PropTypes } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const body = (
            <b>
              test
            </b>
        );

        return body;
    }
}

Clock.displayName = 'Clock';

export default Clock;
