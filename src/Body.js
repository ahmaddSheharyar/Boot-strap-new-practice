import React from "react";
import './Body.css';
import Home from "./Home";
import Getstarted from "./Getstarted";
import Containers from "./Containers";
import GridBasic from "./GridBasic";
import Button from "./Buttons";
import Footer from "./Footer";
import MyContext from "./GlobalStates/MyContext";
import Typography from "./Typography";


function Body({ Componentname }) {

    const { title, settitle } = React.useContext(MyContext);

    const components = {

        Home: Home,
        Getstarted: Getstarted,
        Containers: Containers,
        GridBasic: GridBasic,
        Typography: Typography,

    }

    const Currentcomponent = components[Componentname];

    return <>

        <p style={{ fontSize: '44px' }}>{title.title}</p>
        <Button />
        <Currentcomponent />
        <Footer />



    </>


}

export default Body;