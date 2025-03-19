import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "./lib/lightbox/css/lightbox.min.css";
import "./lib/animate/animate.min.css";
import "./css/bootstrap.min.css";
import "./css/style.css";

import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
// import Spiner from "./components/spiner/Spiner";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Expericence from "./pages/Expericence";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";

import "./lib/jquery/jquery-3.4.1.min.js";
import "./lib/bootstrap/bootstrap.bundle.min.js";
import "./lib/counterup/counterup.min.js"
// import "./lib/wow/wow.min.js";
// import "./lib/typed/typed.min.js";
import "./lib/easing/easing.min.js";

// // import WOW from "wow.js";

// // new WOW().init()

// import "aos/dist/aos.css";
// import AOS from "aos";

// AOS.init();

function App() {
  return (
    <div className="App">
      {/* Spiner component */}
      {/* <Spiner /> */}
      {/* end spiner component */}


      <div className="container">
        <div className="row g-5">

          {/* Profile component */}
          <Profile />
          {/* end profile component */}


          <div className="col-lg-8">
            {/* About component */}
            <About />
            {/* end about component */}


            {/* Skills component */}
            <Skills />
            {/* end skills component */}

            {/* Expericence component */}
            <Expericence />
            {/* end expericence component*/}

            <section className="wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-secondary text-center p-5">
                <h1 className="text-white font-weight-bold">Subscribe My Newsletter</h1>
                <p className="text-white">Subscribe and get my latest article in your inbox</p>
                <div className="position-relative w-100">
                  <input className="form-control bg-dark border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                    <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                </div>
              </div>
            </section>

            {/* Services component */}
            <Services />
            {/* end services component */}
 

            {/* Portfolio component */}
            <Portfolio />
            {/* end portfolio component */}
            
            {/* Testimonial component */}
            <Testimonial />

            {/* end testimonial component */}

            {/* Contact component */}
            <Contact />
            {/* end contact component */}

            {/* Footer component */}
            <Footer />
            {/* end footer component */}
          </div>

        </div>

      </div>

      
      <a href="/" className="back-to-top"><i className="fa fa-angle-double-up"></i></a>
      
    </div>
  );
}

export default App;
