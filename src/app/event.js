/**
 * Created by Sestri4kina on 01.01.2017.
 */
import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import EventRegistration from './event-registration';


class Event extends React.Component {
    render(){
        return(
            <div id="event-wrapper">
                <Panel header="Event title">
                    Panel content
                    <ListGroup fill>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                    </ListGroup>
                    Some more panel content here.
                    <EventRegistration />
                </Panel>
            </div>
        );
    }
}

export default Event;
