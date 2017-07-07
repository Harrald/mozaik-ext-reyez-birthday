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

Clock.propTypes = {
    title:    PropTypes.string.isRequired,
};

Clock.defaultProps = {
    title: 'Birthdays',
};

export default Clock;
