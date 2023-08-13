import "./MainPage.css";
import Promo from "../../components/Promo/Promo";
import AboutProjest from "../../components/AboutProject/AboutProject";
import Techs from "../../components/Techs/Techs";
import AboutMe from "../../components/AboutMe/AboutMe";
import Portfolio from "../../components/Portfolio/Portfolio";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

export default function MainPage({ setIsOpenSideMenu }) {
    return (
        <div className='main-page'>
            <div className='main-page__header'>
                <Header>
                    {" "}
                    <Navigation setIsOpenSideMenu={setIsOpenSideMenu} />
                </Header>
            </div>
            <main>
                <Promo />
                <AboutProjest />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </div>
    );
}
