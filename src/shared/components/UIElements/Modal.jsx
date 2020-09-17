import React from "react";
import ReactDOM from "react-dom";
import {CSSTransition} from "react-transition-group";

import Backdrop from "./Backdrop";

import classes from "./Modal.module.css";
import "./ModalAnims.css"

const ModalOverlay = (props) => {

    const content = (
        <div className={`${classes["modal"]} ${props.className}`}>
            <header className={`${classes["modal__header"]} ${props.headerClass || ""}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                <div className={`${classes["modal__content"]} ${props.contentClass || ""}`}>{props.children}</div>
            </form>
            <footer className={`${classes["modal__footer"]} ${props.footerClass || ""}`}>
                {props.footer}
            </footer>
        </div>
    )

    return(
        ReactDOM.createPortal(content, document.querySelector("#modal-hook"))
    );
}

const Modal = (props) => {
    return(
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames={"modal-anim"}>
             <ModalOverlay {...props}/>
            </CSSTransition>
        </React.Fragment>
    );
}

export default Modal;