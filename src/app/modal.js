/**
 * Created by Sestri4kina on 02.01.2017.
 */
import React from 'react';


class Modal extends React.Component {
    render(){
        return(
            <div className="container">
                <!-- Trigger the modal with a button -->
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Join</button>
                <!-- Modal -->
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <!-- Modal content-->
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Enter your info</h4>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" placeholder="Name Surname">
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="email" placeholder="Email">
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="phone" placeholder="Phone number">
                                    </div>
                                </from>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
