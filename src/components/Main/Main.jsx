import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProjest from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Main() {
    return (
        <>
            <Header />
            <Promo />
            <AboutProjest />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>
    );
}
