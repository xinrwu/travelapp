import React from 'react';
import ReactDOM from 'react-dom'
import EventList from './EventList.jsx'

class AddArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = { area: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ area: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.area)
    }

    render() {
        return (
            <div className="addArea">
                <form onSubmit={this.handleSubmit} method="post">
                    <input onChange={this.handleChange} value={this.state.area} type="text" name="area" placeholder="Area Name" />
                    <button>Add</button>
                </form>
            </div>
        );
    }
}

class Day extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
        this.handleEventsUpdate = this.handleEventsUpdate.bind(this)
    }

    handleEventsUpdate(event) {
        console.log(event)
        var item = {
            destination: event,
            objectives: []
        }
        this.setState(prevState => ({
            data: [...prevState.data, item]
        }));
    }

    render() {
        var areaNodes = this.state.data.map(function (area) {
            return (
                <EventList area={area.destination} data={area.objectives} />
            );
        });
        return (
            <div className="day">
                <h2> Day {this.props.num} </h2>
                <br />
                {areaNodes}
                <AddArea onSubmit={this.handleEventsUpdate} />
            </div>
        );

    }
}

class DayList extends React.Component {
    render() {
        var dayNodes = this.props.data.map(function (day, index) {
            return (
                <Day data={day} num={index} />
            );
        });
        return (
            <div className="dayList">{dayNodes}</div>
        );
    }
}

export default DayList

