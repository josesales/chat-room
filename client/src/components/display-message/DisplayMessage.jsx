import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTimeout } from 'timers';
import { displayMessage } from '../../redux/display-message/display-message-actions';
import { DisplayMessageStyles, DisplayMessageErrorStyles, DisplayMessageAlertStyles, DisplayMessageSuccessStyles, DisplayMessageTypeStyles} 
    from './DisplayMessageStyles'

const DisplayMessage = ({ type, message }) => {

    const [onDisplay, setOnDisplay] = useState(true);
    const dispatch = useDispatch();
    
    let TypeStyles = null;

    switch (type) {
        case 'error':
            TypeStyles = DisplayMessageErrorStyles;
            break;
        case 'alert':
            TypeStyles = DisplayMessageAlertStyles;
            break;
        case 'success':
            TypeStyles = DisplayMessageSuccessStyles;
            break;
    
        default:
            break;
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch(displayMessage({ type: null, message: null }));
            setOnDisplay(false);
        }, 5000)
    }, []);


        return (
            <React.Fragment>
                {
                    onDisplay ?
                        <DisplayMessageStyles>
                            <TypeStyles>
                                <DisplayMessageTypeStyles>{`${type}!`}</DisplayMessageTypeStyles>
                                <h2>{message}</h2>
                            </TypeStyles>
                        </DisplayMessageStyles>
                        : null

                }
            </React.Fragment>
        );
}


export default DisplayMessage;