import React from 'react';
import ReactDOM from 'react-dom'
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc'

const Event = SortableElement(
    ({data}) =>
    <li className="event">
                <div className="eventName">
               Event: {data.event}
               </div>
               <div className="time">
               Time: {data.time_from} - {data.time_to}
               </div>
               <div className="location">
               Location: {data.location}
               </div>
               <div className="notes">
               Notes: {data.notes}
               </div>
    </li>
);

const SortableEvents = SortableContainer(({items}) => {
    return (
        <ul>
            {items.map((event, index) =>
                 <Event key={`event-${index}`}
                        index={index}
                        data={event}/>
            )}
        </ul>
    );
});

class EventMaker extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        var form = {event: '', location: '', time_from: '', time_to: '', notes: ''};
        this.state = {items: form};
    }
    
    handleChange(e) {
        // probably bad to do this
        var form = this.state.items; 
        form[e.target.name] = e.target.value;
        this.setState({items: form});
    }
    
    handleSubmit(e) {
        // prevents the page from reloading
        e.preventDefault();
        this.props.onSubmit(this.state.items);
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
                    <textarea onChange={this.handleChange} value={this.state.notes} name="notes" value="notes"/>
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
            items: this.props.data
         }
        this.handleEventsUpdate = this.handleEventsUpdate.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);
    }

    handleEventsUpdate(e) {
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
                <h2> Area: {this.props.destination} </h2>
                <SortableEvents items={this.state.items} onSortEnd={this.onSortEnd}/>
                <EventMaker onSubmit={this.handleEventsUpdate}/>
            </div>
        );
    }
}


export default EventList