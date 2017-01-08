/**
 * Created by Sestri4kina on 30.12.2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import { Panel, ListGroup, ListGroupItem, Button, Modal, Input, OverlayTrigger } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import GuestBook from './guests';
import update from './guests';

class Application extends React.Component {
    render(){
        return(
            <Router history={browserHistory}>
                <Route path={'/'} component={Event}></Route>
                <Route path={'/guests'} component={GuestBook}></Route>
            </Router>
        );
    }
}

class Event extends React.Component {
    render(){
        return(
            <div id="event-wrapper">
                <Link to={'/guests'}>Guests</Link>
                <Panel header="Event title">
                    Panel content
                    <ListGroup fill>
                        <ListGroupItem>Item 1</ListGroupItem>
                        <ListGroupItem>Item 2</ListGroupItem>
                    </ListGroup>
                    Some more panel content here.

                </Panel>
                <GuestJoins/>
            </div>
        );
    }
}

//Join button and modal
var GuestJoins = React.createClass({
    getInitialState: function() {
        return { showModal: false };
    },
    close: function() {
        globalTitle = "";
        globalInfo = [];
        this.setState({ showModal: false });
    },
    open: function() {
        this.setState({ showModal: true });
        if (document.getElementById("title") && document.getElementById("info")) {
            $("#title").val(globalTitle);
            $("#info").val(globalInfo);
            if (globalTitle != "") {
                $("#modalTitle").text("Edit guest info");
                $("#addButton").text("Edit guest info");
            }
        }
        else requestAnimationFrame(this.open);
    },
    add: function() {
        var title = document.getElementById("title").value;
        var info = document.getElementById("info").value.split(",");
        var exists = false;
        for (var i = 0; i < guests.length; i++) {
            if (guests[i].title === title) {
                guests[i].info = info;
                exists = true;
                break;
            }
        }
        if (!exists) {
            if (title.length < 1) title = "Untitled";
            recipes.push({title: title, info: document.getElementById("info").value.split(",")});
        }
        update();
        this.close();
    },
    render: function() {
        return (
            <div>
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.open}
                    id="show"
                >
                    Join event
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title id="modalTitle">Join this Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <Input type="text" label="Name" placeholder="Enter your Name" id="title" />
                            <Input type="textarea" label="Info" placeholder="Enter phone number and e-mail,Separated,By Commas" id="info"/>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.add} bsStyle="primary" id="addButton">Join Event</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

//


ReactDOM.render(<Application />, document.getElementById('app'));

//ReactDOM.render(<GuestJoins/>, document.getElementById("button"));
update();
