import React, { useEffect } from "react";
import MyContext from "./GlobalStates/MyContext";



function Getstarted() {

    const { title, settitle } = React.useContext(MyContext);
    React.useEffect(() => {

        settitle({ title: 'Getstarted' })
    }, [])


    let prev = "<"
    let next = ">"
    let next2 = ">>"
    return <>

        {/* <p style={{ fontSize: '44px' }} >Bootstrap 5 Get Started</p> */}
        {/* <Button /> */}
        <br /><br />
        <p style={{ fontSize: '36px' }}>What is Bootstrap ?</p>

        <ul>
            <li style={{ fontSize: '18px' }}>Bootstrap is a free front-end framework for faster and easier web <br />development</li>

            <li style={{ fontSize: '18px' }}>Bootstrap includes HTML and CSS based design templates for <br /> typography, forms, buttons, tables, navigation, modals, image carousels<br />     and many other, as well as optional JavaScript plugins</li>
            <li style={{ fontSize: '18px' }}>Bootstrap also gives you the ability to easily create responsive designs   </li>
            <br /><div className="col-9 bg-warning  bg-opacity-50"><b>What is Responsive Web Design?</b> <br /><br />Responsive web design is about creating web sites which automatically adjust themselves to look good on all devices, from small phones to large desktops.</div>
            <br />
        </ul>


        <div style={{ border: '12px solid lightgrey' }} className='col-9'> <div className="bg-dark">
            <p className=" p-2" style={{ fontSize: '26px', backgroundColor: 'lightgrey', marginBottom: '0%' }}>Bootstrap 5 Example</p>
            <br />
            <span style={{ color: 'white' }}>{prev}div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="container-fluid p-5 bg-primary text-white text-center"</span>  <span style={{ color: 'white' }}> <span style={{ color: 'white' }}>{next}</span></span>
            <br /> <span style={{ color: 'brown' }}>{prev}h1/{next}</span> <span style={{ color: '  white' }}> My first Bootstrap Page  </span> <span style={{ color: 'brown' }}>{prev}h1/{next} </span>  <span style={{ color: 'white' }}>{prev}div/{next}</span>
            <br />
            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="container mt-
                5"</span><br />
            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="row"</span>
            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="container-fluid p-5 bg-primary text-white text-center"</span>
            <br /> <span style={{ color: 'brown' }}>h1 </span> <span style={{ color: '  white' }}> My first Bootstrap Page  </span> <span style={{ color: 'brown' }}>h1 </span>
            <br />
            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="container mt-
                5"</span><br />
            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="row"</span>




            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="container-fluid p-5 bg-primary text-white text-center"</span>
            <br /> <span style={{ color: 'brown' }}>h1 </span> <span style={{ color: '  white' }}> My first Bootstrap Page  </span> <span style={{ color: 'brown' }}>h1 </span>
            <br />
            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="container mt-
                5"</span><br />
            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="row"</span>
            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="container-fluid p-5 bg-primary text-white text-center"</span>
            <br /> <span style={{ color: 'brown' }}>h1 </span> <span style={{ color: '  white' }}> My first Bootstrap Page  </span> <span style={{ color: 'brown' }}>h1 </span>
            <br />
            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="container mt-
                5"</span><br />
            '<span style={{ color: 'white' }}>div</span> <span style={{ color: '  brown' }}>class</span><span style={{ color: 'green' }}>="row"</span>

        </div><div style={{ backgroundColor: 'lightgray' }}>     <button className="btn btn-success rounded m-2 "> Try it Yourself<span style={{ fontSize: '10px' }}>  {next2}</span></button>
            </div></div>
        <br />
        <div style={{ marginRight: '22px' }}>        <hr /> </div>


        <p style={{ fontSize: '33px' }}>Bootstrap Versions</p>
        <p style={{ fontSize: '17px' }}>Bootstrap 5 (released 2021) is the newest version of Bootstrap (released<br /> 2013); with new components, faster stylesheet and more responsiveness.<br /><br />

            Bootstrap 5 supports the latest, stable releases of all major browsers and <br />platforms. However, Internet Explorer 11 and down is not supported.<br /><br />

            The main differences between Bootstrap 5 and Bootstrap 3 & 4, is that <br />Bootstrap 5 has switched to vanilla JavaScript instead of jQuery.</p>

        <div className="col-8 bg-warning bg-opacity-50"><b>Note :</b><span style={{ textDecoration: 'underline', cursor: 'pointer' }}> Bootstrap 3</span>and<span style={{ textDecoration: 'underline', cursor: 'pointer' }}> Bootstrap 4</span> is still supported by the team for critical bugfixes and documentation changes, and it is perfectly safe to continue to use them. However, new features will NOT be added to them.</div>
        <br />         <div style={{ marginRight: '22px' }}>        <hr /> </div>

        <p style={{ fontSize: '33px' }}> Why Use Bootstrap ?</p><p />
        <p>Advantages of Bootstrap:</p>
        <ul style={{ fontSize: '17px' }}>
            <li><b>Easy to use:</b> Anybody with just basic knowledge of HTML and CSS can <br />start using Bootstrap</li>
            <li><b>Responsive features:</b> Bootstrap's responsive CSS adjusts to phones, <br />tablets, and desktops</li>
            <li><b>Mobile-first approach:</b> In Bootstrap, mobile-first styles are part of the<br /> core framework</li>
            <li><b>Browser compatibility:</b> Bootstrap 5 is compatible with all modern<br /> browsers (Chrome, Firefox, Edge, Safari, and Opera). Note that if you <br />need support for IE11 and down, you must use either BS4 or BS3.</li>
        </ul>        <div style={{ marginRight: '22px' }}>        <hr /> </div>

        <div>
            <p style={{ fontSize: '33px' }}> Where to Get Bootstrap 5?</p>
            <p>There are two ways to start using Bootstrap 5 on your own web site.

                <br /> You can:</p>
            <ul>

                <li>Include Bootstrap 5 from a CDN</li>
                <li>Download Bootstrap 5 from getbootstrap.com</li>
            </ul>
        </div>
        <div style={{ marginRight: '22px' }}>        <hr /> </div>

        <div>
            <p style={{ fontSize: '33px' }}>Bootstrap 5 CDN</p>
            <p>If you don't want to download and host Bootstrap 5 yourself, you can include<br /> it from a CDN (Content Delivery Network).<br />

                jsDelivr provides CDN support for Bootstrap's CSS and JavaScript:</p>

        </div>



        <div className="col-9" style={{ border: '12px solid lightgrey' }}>
            <p className=" p-2 " style={{ fontSize: '26px', marginBottom: '0%', backgroundColor: 'lightgray' }}>MaxCDN:</p>

            <div className=" bg-dark">
                <br />

                <span className="text-secondary" style={{ color: 'white' }}>{prev}!-- Latest compiled and minified CSS --{next}</span>
                <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>link</span> <br /><span style={{ color: '  rgb(131, 57, 131)' }}> href </span> <span style={{ color: 'lightgreen' }}>="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css<br />/bootstrap.min.css" </span>  <span style={{ color: '  rgb(131, 57, 131)' }}> rel </span>  <span style={{ color: 'lightgreen' }}>="stylesheet"{next}</span>
                <br /> <span className="text-secondary" style={{ color: 'white' }}>{prev}!-- Latest compiled JavaScript--{next}</span>
                <br />
                <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>script</span><br /><span style={{ color: '  rgb(131, 57, 131)' }}> src </span> <span style={{ color: 'lightgreen' }}>="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js<br />/bootstrap.bundle.min.js" </span>    <span style={{ color: 'lightgreen' }}>{next}</span>
                <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>script</span> <span style={{ color: 'lightgreen' }}>{next}</span>
            </div>
            <div style={{ backgroundColor: 'lightgray' }}>     <button className="btn btn-success rounded m-2"> Try it Yourself<span style={{ fontSize: '10px' }}>  {next2}</span></button>

            </div>
        </div>



























    </>

}
export default Getstarted;