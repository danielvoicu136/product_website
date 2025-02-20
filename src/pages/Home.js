
import HeroSlider from "../components/HeroSlider/HeroSlider";
import StatusBar from "../components/StatusBar/StatusBar";
import OurService from "../components/OurService/OurService"
import HeroFeature from "../components/HeroFeature/HeroFeature";
import MainSkill from "../components/MainSkill/MainSkill";

const Home = () => { 
    return ( 
        <div>
             <HeroSlider></HeroSlider>
             <StatusBar></StatusBar>
             <OurService></OurService>
             <HeroFeature></HeroFeature>
             <MainSkill></MainSkill>
        </div>
    )
}

export default Home;