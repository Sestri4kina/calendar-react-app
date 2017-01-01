/**
 * Created by Sestri4kina on 01.01.2017.
 */
import React from 'react';

class Event extends React.Component {
    render(){
        return(
            <div id="event-wrapper">
                <div className="panel panel-default">
                    <div className="panel-heading">Event title</div>
                    <div className="panel-body">
                        Event description
                    </div>
                    <div className="panel-footer">there goes the 'join' button component</div>
                </div>
            </div>
        );
    }
}

export default Event;
