/**
 * Created by Sestri4kina on 08.01.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Accordion, ListGroupItem, ListGroup, Button, ButtonToolbar, Panel } from 'react-bootstrap';
import { Link } from 'react-router';

var guests = (typeof localStorage["guestBook"] != "undefined") ?
    JSON.parse(localStorage["guestBook"]) :
    [
        {title: "Sestri4kina", info: ["(099)111-11-11", "abratochkina@gmail.com"]},
        {title: "Brian Greene", info: ["(099)111-11-00", "bgreene@gmail.com"]}
    ],
    globalTitle = "", globalInfo = []; // Define global title and info

// GuestBook class. This holds all guests.
export default class GuestBook extends React.Component{
    render() {
        return (
            <div>
                <Link to={'/'}>Event</Link>
                <Accordion>
                    {this.props.data}
                </Accordion>
            </div>
        );
    }
}

// Guest class. This is the display for a guest in GuestBook
class Guest extends React.Component{
    remove() {
        guests.splice(this.props.index, 1);
        update();
    }
    edit() {
        globalTitle = this.props.title;
        globalInfo = this.props.info;
        document.getElementById("show").click();
    }
    render() {
        return (
            <div>
                <h4 className="text-center">Info</h4><hr/>
                <InfoList info={this.props.info} />
                <ButtonToolbar>
                    <Button bsStyle="danger" key={'btn-del'+this.props.index} id={'btn-del'+this.props.index} onClick={this.remove.bind(this)}>Delete</Button>
                    <Button bsStyle="default" key={'btn-edit'+this.props.index} id={"btn-edit"+this.props.index} onClick={this.edit.bind(this)}>Edit</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

// InfoList class. This lists all info for a Guest
class InfoList extends React.Component{
    render() {
        var infoList = this.props.info.map(function(dataInfo, i) {
            return (
                <ListGroupItem key={'guest_'+i}>
                    {dataInfo}
                </ListGroupItem>
            );
        });
        return (
            <ListGroup>
                {infoList}
            </ListGroup>
        );
    }
}

// Update function to display all the guests
module.exports = function update() {
    localStorage.setItem("guestBook", JSON.stringify(guests));
    var rows = [];
    for (var i=0; i < guests.length; i++) {
        rows.push(
            <Panel header={guests[i].title} eventKey={i} bsStyle="success" key={'name_'+i}>
                <Guest title={guests[i].title} info={guests[i].info} index={i} key={'info_'+i}/>
            </Panel>
        );
    }
    ReactDOM.render(<GuestBook data={rows}/>, document.getElementById("app"));
};





