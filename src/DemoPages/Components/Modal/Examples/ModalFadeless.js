import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalFadeless extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        console.log('modal className: ', this.props);
    }

    render() {
        return (
            <span className='d-inline-block mb-2 mr-2'>
                <Button color='primary' onClick={this.toggle}>
                    Fadeless Modal
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    fade={false}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color='link' onClick={this.toggle}>
                            Cancel
                        </Button>
                        <Button color='primary' onClick={this.toggle}>
                            Do Something
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </span>
        );
    }
}

export default ModalFadeless;
