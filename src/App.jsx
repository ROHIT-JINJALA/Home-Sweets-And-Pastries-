import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Menu from './components/Menu';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import OrderForm from './components/OrderForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Menu />
        <About />
        <WhyUs />
        <Gallery />
        <Reviews />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}
