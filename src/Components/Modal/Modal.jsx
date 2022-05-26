import React from "react";
import Cards from "../UI/Cards";
import './Modal.css'

const Modal = ({error, onConfirm}) => {
    return(
        <div className='modal-overlay active' onClick={onConfirm}> 
            <Cards>
                <div className="modal-box">
                    <div className="modal-text">
                        <h2>There is something wrong</h2>
                        {error === 'empty' ? <p>The fields cannot be empty</p> : ''}
                        {error === 'age' ? <p>Enter a valid age</p> : ''}
                    </div>
                    <button className="modal-button" onClick={onConfirm}>Close</button>
                </div>
            </Cards>
        </div> 
    )
}

export default Modal