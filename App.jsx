import React from 'react';
import ReactDOM from 'react-dom'
import TravelDisplay from './Display.jsx'

/**
 * 
 * 
 * @class TravelApp
 * @extends {React.Component}
 */
class TravelApp extends React.Component {
    /**
     * 
     * 
     * @returns
     * 
     * @memberOf TravelApp
     */
    render () {
        return (
            <div>
                <h1>Travel App</h1>
                <TravelDisplay/>
            </div>
        );
    }
}

ReactDOM.render(<TravelApp/>, document.getElementById('travelapp'))