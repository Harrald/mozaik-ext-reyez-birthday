import React, { Component, PropTypes } from 'react';

class Clock extends Component {

    props = null;

    constructor(props) {
        super(props);
    }

    render() {
        const body = (
            <b>
              test
            </b>
        );

        const { title } = this.props;

        if (title) {
            return (
                <div>
                    <div className="widget__header">
                        {title}
                        <i className="fa fa-birthday-cake" />
                    </div>
                    {body}
                </div>
            );
        }

        return body;
    }
}

Clock.displayName = 'Clock';

export default Clock;
