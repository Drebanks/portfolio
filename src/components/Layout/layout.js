import Header from "../Header/header";
import Footer from "../Footer/footer";


const Layout =({route}) =>{
    return (
        <>
            <Header/>
                {route}
            <Footer/>
        </>
    )
}

export default Layout;