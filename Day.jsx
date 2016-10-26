import React from 'react';
import ReactDOM from 'react-dom'
import EventList from './EventList.jsx'

class Day extends React.Component {
    render () {
        return (
            <h3> Day {this.props.day_number} </h3>
            <EventList data={this.props.objectives}/>
        );
    }
}

export default Day