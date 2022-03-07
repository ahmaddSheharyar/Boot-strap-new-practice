import React from "react";
import MyContext from "./GlobalStates/MyContext";
import './grid.css'
function GridBasic() {

    const { title, settitle } = React.useContext(MyContext);
    React.useEffect(() => {

        settitle({ title: 'GridBasic' })
    }, [])


    let prev = "<"
    let next = ">"
    let next2 = ">>"
    return <>

        <p style={{ fontSize: '36px' }}>Bootstrap 5 Grid System
        </p>

        <p style={{ fontSize: '18px' }}>Bootstrap's grid system is built with flexbox and allows up to 12 columns <br />across the page.<br />

            If you do not want to use all 12 columns individually, you can group the <br />columns together to create wider columns:</p>




















        <p style={{ fontSize: '18px' }}>The grid system is responsive, and the columns will re-arrange automatically <br />depending on the screen size.<br />

            Make sure that the sum adds up to 12 or fewer (it is not required that you<br /> use all 12 available columns)</p>

        <div className="m-1">        <div style={{ marginRight: '22px' }}>        <hr /> </div>
        </div>
        <p style={{ fontSize: '36px' }}>Grid Classes</p>
        <div style={{ fontSize: '17px' }}><p>The Bootstrap 5 grid system has six classes:</p>

            <ul>

                <li> <span className="bg-secondary bg-opacity-25 text-danger">.col-</span> (extra small devices - screen width less than 576px)
                </li>

                <li>
                    <span className="bg-secondary bg-opacity-25 text-danger">.col-sm-</span>(small devices - screen width equal to or greater than 576px)     </li>


                <li> <span className="bg-secondary bg-opacity-25 text-danger">.col-md-</span>     (medium devices - screen width equal to or greater than<br /> 768px)   </li>

                <li>    <span className="bg-secondary bg-opacity-25 text-danger">.col-lg-</span> (large devices - screen width equal to or greater than 992px)
                </li>

                <li>     <span className="bg-secondary bg-opacity-25 text-danger">.col-xl-</span> (xlarge devices - screen width equal to or greater than <br />1200px)   </li>

                <li>     <span className="bg-secondary bg-opacity-25 text-danger">.col-xxl-</span> (xxlarge devices - screen width equal to or greater than <br />1400px)  </li>


            </ul>
            <p >The classes above can be combined to create more dynamic and flexible <br />layouts.<br />

                <b>Tip:</b> Each class scales up, so if you want to set the same widths for sm and<br /> md, you only need to specify sm.</p>

        </div>        <div style={{ marginRight: '22px' }}>        <hr /> </div>

        <p style={{ fontSize: '36px' }}>
            Basic Structure of a Bootstrap 5 Grid</p>
        <p>The following is a basic structure of a Bootstrap 5 grid:</p>

        <div style={{ border: '20px solid lightgrey' }} className="col-9 bg-dark">
            <br />

            <span className=" container text-secondary" style={{ color: 'white' }}>{prev}!-- Control the column width, and how they should appear on<br />  <span className="container"> different devices</span> --{next}</span>
            <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="row" </span>  <span style={{ color: 'lightgreen' }}>{next}</span>
            <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-*-*" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
            <br /> <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-*-*" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
            <br /> <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-*-*" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>

            <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="row" </span>  <span style={{ color: 'lightgreen' }}>{next}</span>
            <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-*-*" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
            <br /> <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-*-*" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
            <br /> <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-*-*" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
            <br />
            <span className=" container text-secondary" style={{ color: 'white' }}>{prev}!-- Or let Bootstrap automatically handle the layout  --{next}</span>


            <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="row" </span>  <span style={{ color: 'lightgreen' }}>{next}</span>
            <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-*-*" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
            <br /> <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-*-*" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
            <br /> <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-*-*" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
            <br />  </div>
        <br />





        <div style={{ fontSize: '16.5px' }}>   <p>First example: create a row (<span className="text-danger bg-secondary bg-opacity-25">{prev}div class="row"{next}</span>). Then, add the desired<br /> number of columns (tags with appropriate  <span className="text-danger bg-secondary bg-opacity-25">.col-*-*</span>classes). The first star<br /> (*) represents the responsiveness: sm, md, lg, xl or xxl, while the second <br />star represents a number, which should add up to 12 for each row.<br />

            Second example: instead of adding a number to each col<span className="text-danger bg-secondary bg-opacity-25">col</span>, let bootstrap<br /> handle the layout, to create equal width columns: two <span className="text-danger bg-secondary bg-opacity-25">"col"</span> elements =<br /> 50% width to each col, while three cols = 33.33% width to each col. Four<br /> cols = 25% width, etc. You can also use <span className="text-danger bg-secondary bg-opacity-25">.col-sm|md|lg|xl|xxl</span> to make the<br /> columns responsive.<br />

            Below we have collected some examples of basic Bootstrap 5 grid layouts.</p>
        </div>
        <div style={{ marginRight: '22px' }}>        <hr /> </div>


        <p style={{ fontSize: '36px' }}>
            Three Equal Columns</p>
        <div className="row m-3">

            <div className="col bg-secondary bg-opacity-25 p-3">.col</div>
            <div className="col bg-secondary bg-opacity-25 p-3">.col</div>
            <div className="col bg-secondary bg-opacity-25 p-3">.col</div>


        </div>
        <p style={{ fontSize: '16.5px' }}>        The following example shows how to create three equal-width columns, on all <br />devices and screen widths:
        </p>

        <br />
        <div className="col-9" style={{ border: '12px solid lightgrey' }}>

            <p className=" p-2 " style={{ fontSize: '22px', marginBottom: '0%', backgroundColor: 'lightgray' }}>Example</p>

            <div className=" bg-dark">

                <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="row" </span>  <span style={{ color: 'lightgreen' }}>{next}</span>
                <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">.col</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
                <br /> <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">.col</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
                <br /> <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">.col</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>
                <br /><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
            </div>
            <div style={{ backgroundColor: 'lightgray' }}>     <button className="btn btn-success rounded m-2"> Try it Yourself<span style={{ fontSize: '10px' }}>  {next2}</span></button>
            </div>

        </div>
        <br />

        <div style={{ marginRight: '22px' }}>        <hr /> </div>

        <p style={{ fontSize: '36px' }}>
            Two Unequal Responsive Columns</p>
        <div className="row m-4">

            <div class="col-sm-4 bg-secondary bg-opacity-25 p-3">.col-sm-4</div>
            <div class="col-sm-8 bg-secondary bg-opacity-25 p-3 ">.col-sm-8</div>
        </div>
        <p style={{ fontSize: '16.5px' }}>The following example shows how to get two various-width columns starting <br />at tablets and scaling to large extra desktops:</p>
        <br />
        <div className="col-9" style={{ border: '12px solid lightgrey' }}>

            <p className=" p-2 " style={{ fontSize: '22px', marginBottom: '0%', backgroundColor: 'lightgray' }}>Example</p>

            <div className=" bg-dark">


                <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="row" </span>  <span style={{ color: 'lightgreen' }}>{next}</span>
                <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-sm-4" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">.col-sm-4</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
                <br /> <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>div</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="col-sm-8" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">.col-sm-8</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
                <br /><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/div</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
            </div>
            <div style={{ backgroundColor: 'lightgray' }}>     <button className="btn btn-success rounded m-2"> Try it Yourself<span style={{ fontSize: '10px' }}>  {next2}</span></button>
            </div>

        </div>
        <br />
        <br />
        <div className="  col-9 p-3 bg-warning bg-opacity-50"><b>Tip:</b> You will learn more about the grid system later in this tutorial.</div>

    </>
}
export default GridBasic;