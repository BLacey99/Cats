import React from "react";
import CatCard from "./CatCard";

export default function CatCardBuilder(props){

   

    //Component for image that is randomly generated
    //component for text that is randomly generated
    // map out either on their own time, then combine them into a card.

    return(
        <CatCard 
        image = {props.data1}
        text = {props.data2}
        />

    )
}