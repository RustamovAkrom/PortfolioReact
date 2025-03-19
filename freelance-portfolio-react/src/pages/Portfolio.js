import portfolio1 from "./../img/portfolio-1.jpg";
import portfolio2 from "./../img/portfolio-2.jpg";
import portfolio3 from "./../img/portfolio-3.jpg";
import portfolio4 from "./../img/portfolio-4.jpg";


function Portfolio() {
    return (

            <section className="py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="title pb-3 mb-5">Portfolio</h1>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 text-center mb-2">
                      <ul className="list-inline mb-4" id="portfolio-flters">
                        <li className="btn btn-secondary active" data-filter="*"><i className="fa fa-star me-2"></i>All</li>
                        <li className="btn btn-secondary" data-filter=".first"><i className="fa fa-laptop-code me-2"></i>Design</li>
                        <li className="btn btn-secondary" data-filter=".second"><i className="fa fa-mobile-alt me-2"></i>Development</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row portfolio-container">
                    <div className="col-md-6 mb-4 portfolio-item first">
                      <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src={portfolio1} alt="" />
                          <div className="portfolio-btn d-flex align-items-center justify-content-center">
                            <a href={portfolio1} data-lightbox="portfolio">
                              <i className="bi bi-plus text-light"></i>
                            </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 portfolio-item second">
                      <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src={portfolio2} alt="" />
                          <div className="portfolio-btn d-flex align-items-center justify-content-center">
                            <a href={portfolio2} data-lightbox="portfolio">
                              <i className="bi bi-plus text-light"></i>
                            </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 portfolio-item first">
                      <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src={portfolio3} alt="" />
                          <div className="portfolio-btn d-flex align-items-center justify-content-center">
                            <a href={portfolio3} data-lightbox="portfolio">
                              <i className="bi bi-plus text-light"></i>
                            </a>
                          </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 portfolio-item second">
                      <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid w-100" src={portfolio4} alt="" />
                          <div className="portfolio-btn d-flex align-items-center justify-content-center">
                            <a href={portfolio4} data-lightbox="portfolio">
                              <i className="bi bi-plus text-light"></i>
                            </a>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    );
}

export default Portfolio;