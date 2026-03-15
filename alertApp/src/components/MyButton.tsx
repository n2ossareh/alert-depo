import React, { ReactNode } from 'react';
import {MouseEvent} from 'react'; 


const handleButtonClick = (event: MouseEvent) => console.log("button clicked!")

interface Props {
    children: string;
    color?: string;
    onClick: () => void;
}





const MyButton = ({children, color = "danger", onClick}: Props) => {
    return (
        <button className={'btn btn-' + color} onClick={onClick}>
            {children}
        </button>
        
    )
}

export default MyButton;