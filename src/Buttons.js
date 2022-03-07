import { getByTitle } from "@testing-library/react";
import React from "react";

function Button() {

    let prev = "<"
    let next = ">"

    return <>


        <button type="button" className=" btn  btn-success  p-3 rounded "><b ><span style={{ fontSize: '13px' }}>{prev}</span> Home</b> </button>
        <button style={{ marginLeft: '60%' }} className=" btn  btn-success p-3 rounded "> <b style={{ marginLeft: '8px' }}>Next <span style={{ fontSize: '13px' }}>{next}</span></b></button>
        <br />

        <div style={{ marginRight: '22px' }}>        <hr /> </div>

    </>
}
export default Button;