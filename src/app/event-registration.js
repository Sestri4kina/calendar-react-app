/**
 * Created by Sestri4kina on 02.01.2017.
 */
import React from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Modal, Button } from 'react-bootstrap';


class EventRegistration extends React.Component {
    render(){
        return(
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        One fine body...
                    </Modal.Body>

                    <Modal.Footer>
                        <Button>Close</Button>
                        <Button bsStyle="primary">Save changes</Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );
    }
}

export default EventRegistration;
