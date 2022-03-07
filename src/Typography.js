import React from "react";

import MyContext from "./GlobalStates/MyContext";

function Typography() {


    let prev = "<"
    let next = ">"
    let next2 = ">>"

    const { title, settitle } = React.useContext(MyContext);
    React.useEffect(() => {

        settitle({ title: 'Bootstrap 5 Text/Typography' })
    }, [])

    return <>

        <p style={{ fontSize: '36px' }}>
            Bootstrap 5 Default Settings</p>
        <p style={{ fontSize: '16.5px' }}>Bootstrap 5 uses a default <span className="text-danger bg-secondary bg-opacity-25">font-size</span> of 1rem (16px by default), and its<br /> <span className="text-danger bg-secondary bg-opacity-25">line-height </span>is 1.5.<br />

            In addition, all <span className="text-danger bg-secondary bg-opacity-25">{prev}p{next}</span> elements have <span className="text-danger bg-secondary bg-opacity-25">margin-top: 0 </span>and <span className="text-danger bg-secondary bg-opacity-25">margin-bottom: <br />1rem</span> (16px by default).</p>
        <div style={{ marginRight: '22px' }}>        <hr /> </div>

        <p style={{ fontSize: '36px' }}>
            {prev}h1{next} - {prev}h6{next}</p>
        <p style={{ fontSize: '16.5px' }}>
            Bootstrap 5 styles HTML headings (<span className="text-danger bg-secondary bg-opacity-25">{prev}h1{next}</span> to <span className="text-danger bg-secondary bg-opacity-25">{prev}h6{next}</span>)  with a bolder font-weight<br /> and a responsive font-size.</p>


        <div style={{ border: '20px solid lightgrey' }} className="col-9">
            <div style={{ backgroundColor: 'lightgrey', fontSize: '30px' }} ><p>Example</p></div>

            <div className="m-4 ">

                <h1>h1 Bootstrap heading</h1>
                <h2>h2 Bootstrap heading</h2>
                <h3>h3 Bootstrap heading</h3>
                <h4>h4 Bootstrap heading</h4>
                <h5>h5 Bootstrap heading</h5>
                <h6>h6 Bootstrap heading</h6>

            </div>
            <div style={{ backgroundColor: 'lightgrey' }} ><button style={{ marginTop: '10px' }} className="btn btn-success p-2 rounded  ">Try it Yourself <span style={{ fontSize: '10px' }}>  {next2}</span></button></div>
        </div>


        <br />    <div>
            <p style={{ fontSize: '16.5px' }}>You can also use <span className="text-danger bg-secondary bg-opacity-25">.h1 </span> to <span className="text-danger bg-secondary bg-opacity-25">.h6 </span> classes on other elements to make them <br />behave as headings if you want:</p>


        </div>
        <br />

        <div style={{ border: '20px solid lightgrey' }} className="col-9">
            <div style={{ backgroundColor: 'lightgrey', fontSize: '30px' }}>         <p className="   col-9 " style={{ fontSize: '30px', marginBottom: '0%' }}>Example:</p>
            </div>
            <div className=" bg-dark">

                <div className="container  p-3 ">
                    <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>p</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="h1" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">h1 Bootstrap heading</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/p</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
                    <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>p</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="h2" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">h2 Bootstrap heading</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/p</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
                    <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>p</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="h3" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">h3 Bootstrap heading</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/p</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
                    <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>p</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="h4" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">h4 Bootstrap heading</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/p</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
                    <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>p</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="h5" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">h5 Bootstrap heading</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/p</span>    <span style={{ color: 'lightgreen' }}>{next}</span>
                    <br />  <span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>p</span> <span style={{ color: '  rgb(131, 57, 131)' }}> class </span> <span style={{ color: 'lightgreen' }}>="h6" </span>  <span style={{ color: 'lightgreen' }}>{next}</span><span className="text-white">h6 Bootstrap heading</span><span style={{ color: 'lightgreen' }}>{prev}</span><span style={{ color: 'rgb(224, 114, 114)' }}>/p</span>    <span style={{ color: 'lightgreen' }}>{next}</span>

                </div>

            </div>
            <div style={{ backgroundColor: 'lightgrey' }} ><button style={{ marginTop: '10px' }} className="btn btn-success p-2 rounded  ">Try it Yourself <span style={{ fontSize: '10px' }}>  {next2}</span></button></div>

        </div>
        <div style={{ marginRight: '22px' }}>        <hr /> </div>



        <p style={{ fontSize: '36px' }}>
            Display Headings</p>


        < p style={{ fontSize: '16.5px' }}>
            Display headings are used to stand out more than normal headings (larger <br />font-size and lighter font-weight), and there are six classes to choose from:<br /><span className="text-danger bg-secondary bg-opacity-25">.display-1 </span> to<span className="text-danger bg-secondary bg-opacity-25">.display-6 </span> :</p>





        <div style={{ border: '20px solid lightgrey' }} className="col-9">
            <div style={{ backgroundColor: 'lightgrey', fontSize: '30px' }} ><p>Example</p></div>

            <div className="m-4 ">
                <h1 class="display-1">Display 1</h1>
                <h1 class="display-2">Display 2</h1>
                <h1 class="display-3">Display 3</h1>
                <h1 class="display-4">Display 4</h1>
                <h1 class="display-5">Display 5</h1>
                <h1 class="display-6">Display 6</h1>

            </div>
            <div style={{ backgroundColor: 'lightgrey' }} ><button style={{ marginTop: '10px' }} className="btn btn-success p-2 rounded  ">Try it Yourself <span style={{ fontSize: '10px' }}>  {next2}</span></button></div>
        </div>












    </>

}
export default Typography;