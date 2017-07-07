import React, { Component, PropTypes } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const birthdays = [
            '1986-05-09',
            '1995-07-18',
        ];




        const body = (
            <ul>
                <li><b>Harrald:</b> 1986-05-09</li>
                <li><b>Leroy:</b> 1995-07-18</li>
            </ul>
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
