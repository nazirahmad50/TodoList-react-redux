import React from "react";

// high order componenet that takes in any component
const Rainbow = (WrappedComponenet) =>{

    const colours = ["red", "blue", "green"];
    const randColors = colours[Math.floor(Math.random() * 3)];
    const className = randColors + "-text";

    // return a func with the props that wouldve been passed into the WrappedComponenet
    // if the wrapped component recieved any props they will be passed in here
    return (props) =>{
        // return jsx
        return(
            // will add an extra div over the wrapped componnet
            <div className={className}>
                {/*pass the props back again into the wrapped component*/}
                <WrappedComponenet {...props}/>
            </div>
        )
    }
}

export default Rainbow;