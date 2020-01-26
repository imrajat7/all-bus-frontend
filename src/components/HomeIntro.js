import React from 'react';
import savings from '../assets/savings.svg'
import calendar from '../assets/calendar.svg'
import authentication from '../assets/authentication.svg'
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomeIntro(){

    React.useEffect(()=>{
        Aos.init();
    },[])
  
    return(
        <div className="container-fluid" style={{background:'#F5F5F5'}}>
            {/* <div style={{backgroundImage:`url(${intro})`,filter:'blur(12px)', margin: '40px', height:"350px", backgroundSize:'cover', backgroundPosition:'center',display:'flex',alignItems:'center',justifyContent:'center'}}>
            </div> */}
            <div style={{padding : 10}}>
                <h2 style={{textAlign:'center',fontSize:'50px',textShadow:'4px 2px #BDBDBD'}}>Where you can book every bus</h2>
                <div style={{width : "90%" , textAlign: "center" , margin : "auto" }}>
                    <h4 style={{}}>
                        allBus app offers the quickest & safest way to book bus tickets ! Search for your destination city or dropping point and choose from a wide choice of bus services based on your preferred bus operator, departure times, prices, bus types, pickup & drop off points, ratings & reviews. Choose seats & pay securely using popular payment options based on your country. New! Get cashback with every booking and use it for your commute with our rPool service
                    </h4>
                </div>
                <div style={{height:'auto',marginLeft:'auto',marginRight:'auto',marginTop:'20px',marginBottom:'20px' , display : "flex" , justifyContent : "center" , flexWrap : "wrap",textShadow: '2px 2px #BDBDBD'}} className="container-fluid">
                    <div data-aos="fade-up" style={{display:'inline-block', maxWidth : 300, margin : 15}}>
                        <img src={savings} alt='discount' style={{ maxWidth: 300}}></img>
                        <br></br>
                        <p style={{textAlign:'center',fontWeight:500}}>Get Discounts</p>
                    </div>
                    <div data-aos="fade-up" style={{display:'inline-block' , maxWidth : 300 , margin : 15}}>
                        <img src={calendar} alt='calendar' style={{ maxWidth: 300}}></img>
                        <br></br>
                        <p style={{textAlign:'center',fontWeight:500}}>On time buses</p>
                    </div>
                    <div data-aos="fade-up" style={{display:'inline-block' , maxWidth : 300 , margin : 15}}>
                        <img src={authentication} alt='authentication' style={{ maxWidth: 300}}></img>
                        <br></br>
                        <p style={{textAlign:'center',fontWeight:500}}>Secure Payments</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeIntro
