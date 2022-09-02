import Header from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import '../styles/globals.css';
import 'animate.css';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
