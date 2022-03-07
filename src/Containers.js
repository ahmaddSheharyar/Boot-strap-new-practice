import React from "react";

import MyContext from "./GlobalStates/MyContext";


function Containers() {
    const { title, settitle } = React.useContext(MyContext);
    React.useEffect(() => {

        settitle({ title: 'Containers' })
    }, [])


    let prev = "<"
    let next = ">"
    let next2 = ">>"

    return <>
        {/* <p style={{ fontSize: '44px' }}>Bootstrap 5 Containers</p> */}
        {/* <Button /> */}

        <br />

        <p style={{ fontSize: '35px' }}>Bootstrap 5 Containers</p>

        <div style={{ fontSize: '18px' }}>     <p>You learned from the previous chapter that Bootstrap requires a containing <br />element to wrap site contents.</p>

            <p>Containers are used to pad the content inside of them, and there are <br />two container classes available:</p>

            <ol>
                <li>The <span style={{ color: 'hotpink' }}>.container</span> class provides a responsive <b>fixed width container</b></li>
                <li>The <span style={{ color: 'hotpink' }}>.container-fluid</span> class provides a <b>full width container</b>,<br /> spanning the entire width of the viewport</li>
            </ol>
        </div><br /><br />

        <div className="row" >
            <div className=" p-5 container col-3 bg-secondary" >
                .container

            </div>

            <div className=" p-5 container col-4 bg-secondary" >
                .container-fluid

            </div>


        </div>

        <br /><br />
        <div style={{ marginRight: '22px' }}>        <hr /> </div>



        <p style={{ fontSize: "33px" }}>Fixed Container</p>
        <p style={{ fontSize: "18px" }}> Use the <span style={{ color: 'hotpink' }}>.container</span>class to create a responsive, fixed-width container.<br />

            Note that its width (<span style={{ color: 'hotpink' }}>max-width</span>) will change on different screen sizes:</p>

        <br />
        <div className="col-10"><table className="table table-bordered">

            <thead>            <th>Extra small<br />576px</th>
                <th >Small<br />
                    ≥576px</th>
                <th >Medium<br />
                    ≥768px</th>
                <th >Large<br />
                    ≥992px</th>
                <th >Extra <br />Large<br />
                    ≥1200px</th>
                <th >XXL<br></br>
                    ≥1400px</th>
            </thead>
            <tbody><tr >
                <td >max-<br />width	100%</td>
                <td > 540px</td>
                <td > 720px</td>
                <td > 960px</td>

                <td > 1140px</td>
                <td > 1320px</td>

            </tr>
            </tbody>
        </table>
        </div>
        <br />
        <div className="col-9" style={{ border: '12px solid lightgrey' }}>

            <p className=" p-2 " style={{ fontSize: '22px', marginBottom: '0%', backgroundColor: 'lightgray' }}>Example</p>

            <div className=" bg-dark">
                <br />

                <span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}>class</span><span style={{ color: 'lightgreen' }}>="container-fluid"{next}</span>
                <br />  <span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>h1</span><span style={{ color: "lightgreen" }}>{next}</span><span style={{ color: 'white' }}>My First Bootstrap Page</span><span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/h1</span><span style={{ color: "lightgreen" }}>{next}</span>
                <br />  <span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>p</span><span style={{ color: "lightgreen" }}>{next}</span><span style={{ color: 'white' }}>This is some text .</span><span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/p</span><span style={{ color: "lightgreen" }}>{next}</span>
                <br />        <span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span> <span style={{ color: 'lightgreen' }}>   {next}</span>
            </div>
            <div style={{ backgroundColor: 'lightgray' }}>     <button className="btn btn-success rounded m-2"> Try it Yourself<span style={{ fontSize: '10px' }}>  {next2}</span></button>  </div>

        </div>


        <br />
        <div className="col-9 bg-warning bg-opacity-50 p-2">The XXL breakpoint (≥1400px) is new in Bootstrap 5, while the largest<br /> breakpoint in Bootstrap 4 is Extra large (≥1200px).</div>
        <div style={{ marginRight: '22px' }}>        <hr /> </div>

        <p style={{ fontSize: '33px' }}>Fluid Container</p>
        <p>Use the <span style={{ color: 'hotpink' }}> .container-fluid</span> class to create a full width container, that will<br /> always span the entire width of the screen (<span style={{ color: 'hotpink' }}>width</span> is always <span style={{ color: 'hotpink' }}>100%</span>):</p>

        <div className="col-9" style={{ border: '12px solid lightgrey' }}>

            <p className=" p-2 " style={{ fontSize: '22px', marginBottom: '0%', backgroundColor: 'lightgray' }}>Example</p>

            <div className=" bg-dark">
                <br />

                <span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}>class</span><span style={{ color: 'lightgreen' }}>="container-fluid"{next}</span>
                <br />  <span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>h1</span><span style={{ color: "lightgreen" }}>{next}</span><span style={{ color: 'white' }}>My First Bootstrap Page</span><span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/h1</span><span style={{ color: "lightgreen" }}>{next}</span>
                <br />  <span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>p</span><span style={{ color: "lightgreen" }}>{next}</span><span style={{ color: 'white' }}>This is some text .</span><span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/p</span><span style={{ color: "lightgreen" }}>{next}</span>
                <br />        <span style={{ color: "lightgreen" }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span> <span style={{ color: 'lightgreen' }}>   {next}</span>
            </div>
            <div style={{ backgroundColor: 'lightgray' }}>     <button className="btn btn-success rounded m-2"> Try it Yourself<span style={{ fontSize: '10px' }}>  {next2}</span></button>
            </div>

        </div>


















    </>
}
export default Containers;