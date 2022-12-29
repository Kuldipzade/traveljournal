
import React from "react"



export default function Hero(props){
    return(
        
        <div className="body--container">
            <div className="card--body">

                <img src={props.item.imageUrl} alt="town" className="town--img"/>

                <div className="card--details">
                    <div className="box-1">
                    
                <img src={props.item.locationIcon} alt="logo" className="loc--icon"/>

                <p className="city-name">{props.item.location}</p>

                <a href={props.item.googleMap} className="maps">View on Google Maps</a>
                </div>

                <h1>{props.item.title}</h1>

                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
                
                </div>
            </div>


        </div>
    )
}