import "./MainPage.css";
import Promo from "../Promo/Promo";
import AboutProjest from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

export default function MainPage() {
    return (
        <>
            <div className='main-page__header'>
                <Header>
                    {" "}
                    <Navigation />
                </Header>
            </div>

            <Promo />
            <AboutProjest />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    );
}
