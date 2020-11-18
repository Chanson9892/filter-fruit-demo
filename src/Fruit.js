import React from "react";


const Fruit = props => {
    return(
        <div onClick={() => props.handleClick(props.fruit)}>{props.fruit}</div>
    )
}

export default Fruit;