import React from 'react';
import ReactDOM from 'react-dom'
import DayList from './DayList.jsx'
// temporary travel data
var travelData = [
	[
		{
			"destination": "area1", 
			"objectives": [
				{
					"time_from": "11:30am",
					"time_to": "12:30pm",
					"event": "something1",
					"location": "Ul'dah",
					"notes": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
				},
				{
					"time_from": "12:50pm",
					"time_to": "3:30pm",
					"event": "something2",
					"location": "Gridania",
					"notes": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
				}
			]
		},
		{
			"destination": "area2", 
			"objectives": [
				{
					"time_from": "12:50pm",
					"time_to": "3:30pm",
					"event": "something2",
					"location": "Gridania",
					"notes": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
				}
			]
		}
	],
	[
		{
			"destination": "area1", 
			"objectives": [
				{
					"time_from": "11:30am",
					"time_to": "12:30pm",
					"event": "something1",
					"location": "Ul'dah",
					"notes": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
				},
				{
				"time_from": "12:50pm",
				"time_to": "3:30pm",
				"event": "something2",
				"location": "Gridania",
				"notes": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
				}
			]
		}
	]
]

/**
 * 
 * 
 * @class TravelDisplay
 * @extends {React.Component}
 */
class TravelDisplay extends React.Component {
    /**
     * 
     * 
     * @returns
     * 
     * @memberOf TravelDisplay
     */
    render () {
        return (
            <DayList data={travelData}/>
        );
    }
}

export default TravelDisplay