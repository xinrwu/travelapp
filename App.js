import React from 'react';
import ReactDOM from 'react-dom'

class TravelApp extends React.Component {
    render () {
        return (
            <div>
                <h1>Travel App</h1>
            </div>
        );
    }
}

ReactDOM.render(<TravelApp/>, document.getElementById('travelapp'))