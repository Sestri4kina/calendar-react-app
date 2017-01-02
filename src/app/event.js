/**
 * Created by Sestri4kina on 01.01.2017.
 */
import React from 'react';
import Modal from './modal';


class Event extends React.Component {
    render(){
        return(
            <div id="event-wrapper">
                <div id="panel-heading">Event title</div>
                    <div id="panel-body">
                        Event description
                    </div>
                    <div id="panel-footer">
                        <Modal />
                    </div>
             </div>
        );
    }
}

export default Event;
