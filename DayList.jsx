import React from 'react';
import ReactDOM from 'react-dom'
import EventList from './EventList.jsx'

/**
 * 
 * 
 * @class DayList
 * @extends {React.Component}
 */
class DayList extends React.Component {
    /**
     * 
     * 
     * @returns
     * 
     * @memberOf DayList
     */
    render () {
        /**
         * 
         * 
         * @param {any} day
         * @param {any} index
         * @returns
         */
        var dayNodes = this.props.data.map(function(day, index) {
            return (
                <Day data={day} num={index}/>
            );
        });
        return (
            <div className="dayList">{dayNodes}</div>
        );
    }
}

export default DayList

/**
 * 
 * 
 * @class Day
 * @extends {React.Component}
 */
class Day extends React.Component {
    /**
     * 
     * 
     * @returns
     * 
     * @memberOf Day
     */
    render () {
        /**
         * 
         * 
         * @param {any} area
         * @returns
         */
        var areaNodes = this.props.data.map(function(area) {
            return (
                <EventList area={area.destination} data={area.objectives}/>
            );
        });
        return (
            <div className="day"> 
             <h2> Day {this.props.num} </h2>
             <br/>
             {areaNodes} 
            </div>
        );

    }
}
