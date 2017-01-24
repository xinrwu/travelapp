import React from 'react';
import ReactDOM from 'react-dom'
import {arrayMove, SortableContainer, SortableElement} from 'react-sortable-hoc'


class Event extends React.Component {
    render() {
        return (
        <li className="event">
                <div className="eventName">
               Event: {this.props.data.event}
               </div>
               <div className="time">
               Time: {this.props.data.time_from} - {this.props.data.time_to}
               </div>
               <div className="location">
               Location: {this.props.data.location}
               </div>
               <div className="notes">
               Notes: {this.props.data.notes}
               </div>
         </li>
        );
    }
}



const SortableEventElement = SortableElement(
    ({data}) => <Event data={data}/>
);
// do something with index?
const SortableEvents = SortableContainer(
    ({data}) => {
        return (
            <ul>
                {data.map((event, index) =>
                    <SortableEventElement key={`event-${index}`}
                            index={index}
                            data={event}/>
                )}
            </ul>
        );
    }
);

class EventMaker extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {  event: '', 
                        location: '', 
                        time_from: '', 
                        time_to: '', 
                        notes: ''};
    }
    
    handleChange(e) {
        const target = e.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(e) {
        // prevents the page from reloading
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
    }
    
    render() {
       return( 
           <div className="eventMaker">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} value={this.state.event} type="text" name="event" placeholder="Event"/>
                    <br/>
                    <input onChange={this.handleChange} value={this.state.location} type="text" name="location" placeholder="Location"/>
                    <br/>
                    <input onChange={this.handleChange} value={this.state.time_from} type="time" name="time_from"/>
                    <br/>
                    <input onChange={this.handleChange} value={this.state.time_to} type="time" name="time_to"/>
                    <br/>
                    <textarea onChange={this.handleChange} value={this.state.notes} name="notes" placeholder="Notes"/>
                    <button>Add</button>
                </form>
            </div>
       );
    }
}

class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.data,
            area: this.props.area
         }
        this.handleEventsUpdate = this.handleEventsUpdate.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);
    }

    handleEventsUpdate(e) {
        console.log(e);
        this.setState(prevState => ({
            items: [...prevState.items, e],
        }));
    }

    onSortEnd({oldIndex, newIndex}) {
        this.setState({
            items: arrayMove(this.state.items, oldIndex, newIndex)
        });
    }

    render() {
        return (
            <div className="eventList">
                <h2> Area: {this.state.area} </h2>
                <SortableEvents data={this.state.items} onSortEnd={this.onSortEnd}/>
                <EventMaker onSubmit={this.handleEventsUpdate}/>
            </div>
        );
    }
}


export default EventList