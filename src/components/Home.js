import React,{Component} from 'react';
import Search from '../components/Search';
import HomeIntro from './HomeIntro'
import Footer from './Footer'

class Home extends Component{
    render(){
        return(
            <div>
                <div className="div-bg">
                    <Search/>
                </div>
                <HomeIntro/>
                <Footer/>
            </div>
        )
    }
}

export default Home