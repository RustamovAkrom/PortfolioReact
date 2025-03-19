import testimonial1 from "./../img/testimonial-1.jpg";
import testimonial2 from "./../img/testimonial-2.jpg";
import testimonial3 from "./../img/testimonial-3.jpg";


function Testimonial() {
    return (
        <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
        <h1 className="title pb-3 mb-5">Testimonial</h1>
        <div className="owl-carousel testimonial-carousel">
          <div className="text-left">
            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
            <p className="fs-4 mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid" src={testimonial1} alt="" style={{ width: '60px', height: '60px;' }} />
                <div className="ps-3">
                  <p className="text-primary fs-5 mb-1">Client Name</p>
                  <i>Profession</i>
                </div>
            </div>
          </div>
          <div className="text-left">
            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
            <p className="fs-4 mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid" src={testimonial2} alt="" style={{ width: '60px', height: '60px;' }} />
                <div className="ps-3">
                  <p className="text-primary fs-5 mb-1">Client Name</p>
                  <i>Profession</i>
                </div>
            </div>
          </div>
          <div className="text-left">
            <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
            <p className="fs-4 mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita</p>
            <div className="d-flex align-items-center">
              <img className="img-fluid" src={testimonial3}  alt="" style={{ width: '60px', height: '60px;' }} />
                <div className="ps-3">
                  <p className="text-primary fs-5 mb-1">Client Name</p>
                  <i>Profession</i>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Testimonial;