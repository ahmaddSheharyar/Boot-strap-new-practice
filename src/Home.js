import React from "react"
import MyContext from "./GlobalStates/MyContext"




function Home() {
    const { title, settitle } = React.useContext(MyContext);
    React.useEffect(() => {

        settitle({ title: 'Home' })
    }, [])

    let prev = "<"
    let next = ">"
    let next2 = ">>"


    return <>

        <br />        <div style={{ backgroundColor: ' rgb(205, 255, 250)' }} className="col-10  rounded "><p style={{ padding: '2%', fontSize: '20px' }}>Bootstrap 5 is the newest version of Bootstrap, which is the most popular <br /> HTML, CSS, and JavaScript framework for creating responsive, mobile-first websites.<br />

            Bootstrap 5 is completely free to download and use!<br /> <br />  <button className=" btn  btn-success p-3 rounded ">Start learning Bootstrap5 now <span style={{ fontSize: '10px' }}>{next2}</span> </button></p> </div>

        <br />         <div style={{ marginRight: '22px' }}>        <hr /> </div>

        <p style={{ fontSize: '33px' }}>Try it Yourself Examples
        </p>

        <div><p style={{ fontSize: '18px' }}    >This tutorial contains hundreds of Bootstrap 5 examples.<br /><br />

            Wi  th our online editor, you can edit the code, and click on a button to view<br /> the result .</p></div>





        <div className="col-10 border border-5 border-secondary">

            <p className="bg-secondary text-dark" style={{ marginBottom: '0% ', fontSize: '22px' }}>Bootstrap 5 Example</p>



            <div className="col-16 p-5 bg-primary  text-white text-center" ><p ><b style={{ fontSize: '33px' }}>My First Bootstrap Page    </b><br />Resize this responsive to see the effect !</p>
                {/* <p style={{ textAlign: 'center', marginTop: '0%' }}>Resize this responsive to see the effect !</p> */}

            </div><br />
            <div className="row">
                <div className="col-4"><b style={{ fontSize: '20px' }}>  Column 1</b><br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...<br />

                    Ut enim ad minim<br /> veniam, quis nostrud <br />exercitation ullamco laboris...</div>
                <div className="col-4"><b style={{ fontSize: '20px' }}>  Column 2</b><br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...<br />

                    Ut enim ad minim<br /> veniam, quis nostrud <br />exercitation ullamco laboris...</div>
                <div className="col-4"><b style={{ fontSize: '20px' }}>  Column 3</b><br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...<br />

                    Ut enim ad minim<br /> veniam, quis nostrud <br />exercitation ullamco laboris...</div>

            </div>
            <div className="bg-secondary" > <button className="btn btn-success  m-2">Try it Yourself <span style={{ fontSize: '10px' }}>{next2}</span></button></div>
        </div>
        <   br />
        <div className="col-7 bg-warning p-4 bg-opacity-50 ">click  "Try it Yourself" button to see how it works.</div>

        <div style={{ marginRight: '22px', padding: '1%' }}>        <div style={{ marginRight: '22px' }}>        <hr /> </div>
            <br />        <div style={{ marginRight: '22px' }}>        <hr /> </div>

        </div>

        <div><p style={{ fontSize: '33px' }}>Bootstrap 5 vs. Bootstrap 3 & 4</p>
            <p style={{ fontSize: '18px' }}>      Bootstrap 5 is the newest version of Bootstrap; with new components, faster <br />stylesheet and more responsiveness.<br /><br />

                Bootstrap 5 supports the latest, stable releases of all major browsers and <br />platforms. However, Internet Explorer 11 and down is not supported.<br /><br />

                The main differences between Bootstrap 5 and Bootstrap 3 & 4, is that <br />Bootstrap 5 has switched to JavaScript instead of jQuery.
            </p>
            <div className="col-7 bg-warning p-4  bg-opacity-50"> <b>Note:</b> Bootstrap 3 and Bootstrap 4 is still supported by the team for critical bugfixes and documentation changes, and it is perfectly safe to continue to use them. However, new features will NOT be added to them.</div>
        </div>
        <br />          <div style={{ marginRight: '22px' }}>        <hr /> </div>

        <p style={{ fontSize: '33px' }}>Bootstrap 5 Exercises</p>
        <div className="border border-5  border-dark  col-10">

            <p className="bg-dark text-white p-2 " style={{ fontSize: '33px' }}>Test Yourself With Exercises</p>
            <b style={{ marginLeft: '3%', fontSize: '22px' }}> Exercise :</b>
            <p style={{ marginLeft: '22px' }}>Use a Bootstrap class to center the following text:</p>
            <div className="  bg-opacity-50 bg-secondary p-4 col-10 m-5 " >    {prev}p    class <input className="rounded" type='text' />  Hello World      p{next}         </div>
            <div style={{ padding: '4%' }}>      <button className="btn  btn-success rounded">SubmitAnswer <span style={{ fontSize: '10px' }}>{next2}</span></button>

                <p style={
                    { textDecoration: 'underline', cursor: 'pointer' }}>Start the Exerxise</p>
            </div>  </div>
        <br />

        <div style={{ marginRight: '22px', padding: '1%' }}>        <div style={{ marginRight: '22px' }}>        <hr /> </div>

            <p style={{ fontSize: '33px' }}>Bootstrap 5 Quiz Test    </p>
            <p>Test your Bootstrap 5 skills at W3Schools!</p>

            <button className="btn btn-primary"><b>Start Bootstrap 5 Quiz!</b></button>
        </div>
        <br />

        {/* 
        <Footer /> */}
    </>
}
export default Home;