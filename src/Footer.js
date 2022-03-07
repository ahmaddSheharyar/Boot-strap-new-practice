import React from "react";
import img from "./img.png"

function Footer() {
    let next = ">"
    return <>


        <footer className="mt-5">


            <div style={{ marginRight: '22px' }}>        <hr /> </div>


            <div style={{ marginRight: '22px', padding: '1%' }}>
                <button className="btn bg-secondary p-2 bg-opacity-50" style={{ marginLeft: '10%' }}>Report Error    </button>
                <button className="btn bg-secondary p-2 bg-opacity-50" style={{ marginLeft: '10%', width: '13%' }}>Forum    </button>
                <button className="btn bg-secondary p-2 bg-opacity-50" style={{ marginLeft: '10%', width: '13%' }}>About    </button>
                <button className="btn bg-secondary p-2 bg-opacity-50" style={{ marginLeft: '10%', width: '13%' }}>Shop  </button>
                <hr />
            </div>
            <div className="row">            <div className="col-3">
                <p><b>Top Tutorials</b><br />
                    HTML Tutorial<br />
                    CSS Tutorial<br />
                    JavaScript Tutorial<br />
                    How To Tutorial<br />
                    SQL Tutorial<br />
                    Python Tutorial<br />
                    W3.CSS Tutorial<br />
                    Bootstrap Tutorial<br />
                    PHP Tutorial<br />
                    Java Tutorial<br />
                    C++ Tutorial<br />
                    jQuery Tutorial</p>
            </div>
                <div className="col-3">
                    <p style={{ marginLeft: '7%' }}><b>Top References</b><br />

                        HTML Reference<br />
                        CSS Reference<br />
                        JavaScript Reference<br />
                        SQL Reference<br />
                        Python Reference<br />
                        W3.CSS Reference<br />
                        Bootstrap Reference<br />
                        PHP Reference<br />
                        HTML Colors<br />
                        Java Reference<br />
                        Angular Reference<br />
                        jQuery Reference</p>
                </div>
                <div className="col-3">

                    <p style={{ marginLeft: '7%' }}><b>   Top Examples</b><br />

                        HTML Examples<br />
                        CSS Examples<br />
                        JavaScript Examples<br />
                        How To Examples<br />
                        SQL Examples<br />
                        Python Examples<br />
                        W3.CSS Examples<br />
                        Bootstrap Examples<br />
                        PHP Examples<br />
                        Java Examples<br />
                        XML Examples<br />
                        jQuery Examples</p>

                </div>

                <div className="col-3">
                    <p style={{ marginLeft: '7%' }}><b>    Web Courses</b><br />



                        HTML Course<br />
                        CSS Course<br />
                        JavaScript Course<br />
                        Front End Course<br />
                        SQL Course<br />
                        Python Course<br />
                        PHP Course<br />
                        jQuery Course<br />
                        Java Course<br />
                        C++ Course<br />
                        C# Course<br />
                        XML Course</p>
                    <button className="btn btn-dark"> Get Certified<span style={{ fontSize: '10px' }}>{next}{next}</span></button>
                </div>

            </div>
            <div style={{ marginRight: '22px' }}>        <hr /> </div>

            <div className="col-12  text-secondary" style={{ fontSize: '14px', textAlign: 'center' }}>W3Schools is optimized for learning and training. Examples might be simplified to improve reading and learning.<br /> Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of<br /> all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.<br /><br />

                Copyright 1999-2022 by Refsnes Data. All Rights Reserved.<br />
                W3Schools is Powered by W3.CSS.</div>

            <div className="m-3" style={{ textAlign: 'center' }}> <img src={img} style={{ width: '6%', height: '6%' }} /></div>
        </footer>






    </>
}
export default Footer;