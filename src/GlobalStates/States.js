import React from "react";
import MyContext from "./MyContext";


function States(props) {
    const s1 = {
        'title': 'Home'
    }
    const [title, settitle] = React.useState(s1);

    return <>

        <MyContext.Provider value={{ title, settitle }}>
            {props.children}
        </MyContext.Provider>


    </>
}
export default States;