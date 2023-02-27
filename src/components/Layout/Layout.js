import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero';
import Form from '../Form/Form';
import InfoPage from '../InfoPage/InfoPage';



const Layout = ({children}) => (
    <div>

        <Header/>

        {children}


        <Footer/>
    </div>
);

export default Layout;