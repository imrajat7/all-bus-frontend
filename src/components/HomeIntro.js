import React,{Component} from 'react';
import logo from '../assets/logo.png'
import intro from '../assets/intro.jpg'



function HomeIntro(){
    return(
        <div className="container-fluid" style={{background:'#F5F5F5'}}>
            <div style={{backgroundImage:`url(${intro})`,filter:'blur(12px)', margin: '40px', height:"500px", backgroundSize:'cover', backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
            </div>
            <div><h1 style={{fontSize:'100px',position:'absolute',top:'85%',left:'50%',transform:'translate(-50%,-50%)'}}>allBus</h1></div>
            <div style={{padding:'100px',transform: 'translatey(-20%)'}}>
                <h2 style={{textAlign:'center',fontSize:'50px',textShadow:'4px 2px #BDBDBD'}}>Where you can book every bus</h2>
                <br></br>
                <h3>
                allBus app offers the quickest & safest way to book bus tickets ! Search for your destination city or dropping point and choose from a wide choice of bus services based on your preferred bus operator, departure times, prices, bus types, pickup & drop off points, ratings & reviews. Choose seats & pay securely using popular payment options based on your country. New! Get cashback with every booking and use it for your commute with our rPool service
                </h3>
            </div>
        </div>
    )
}

export default HomeIntro
