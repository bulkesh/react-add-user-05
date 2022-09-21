import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const BackDrop = props => {
    return (<div className={classes.backdrop} onClick={props.onCloseModal}></div>)
}

const Modal = props => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button type="buttom" onClick={props.onCloseModal}>Close</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = props => {
    return (
        <Fragment>
            {
                ReactDOM.createPortal(<BackDrop onCloseModal={props.onCloseModal} />,
                    document.getElementById('backdrop-root'))
            }
            {
                ReactDOM.createPortal(<Modal title={props.title} message={props.message} onCloseModal={props.onCloseModal} />,
                    document.getElementById('overlay-root'))
            }
        </Fragment>
    );
}

export default ErrorModal;