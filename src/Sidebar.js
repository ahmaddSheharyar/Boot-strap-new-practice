import React from "react";
import './Sidebar.css';



function Sidebar({ component, setcomponent }) {

    const handleclick = (topic) => {

        if (topic) {
            return setcomponent(topic)
        }
    }


    return <>
        <div className="sidebar">
            {/* <p style={{ textAlign: 'center', fontSize: '16px    ' }}>Bootstrap 5 Tutorial</p> */}
            <h3 style={{ textAlign: 'center' }}>Bootstrap 5 Tutorial</h3>
            <button className="button" onClick={() => handleclick('Home')} >  BS5 Home</button>  <br />


            <button className="button" onClick={() => handleclick('Getstarted')}> BS5 GetStarted</button> <br />





            <button className="button" onClick={() => handleclick('Containers')}>Bs5 Containers</button>
            <button className="button" onClick={() => handleclick('GridBasic')}> BS5 Grid Basic</button> <br />
            <button className="button" onClick={() => handleclick('Typography')}> BS5 Typography</button> <br />
            {/* <button className="button"> Six</button> <br />
            <button className="button"> Seven</button> <br />
            <button className="button"> Eight</button> <br />
            <button className="button"> Nine</button> <br />
            <button className="button"> Ten</button> <br /> */}


        </div>

    </>
}
export default Sidebar;