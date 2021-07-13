import React from 'react';

export class Corosel extends React.Component{
    render()
    {
        return(
            <div className="container">
                <br/>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
               <img src="https://www.thebalancecareers.com/thmb/Kv4LnFehwRbVoMyT0V2nGqt8-5U=/950x0/filters:max_bytes(150000):strip_icc():format(webp)/doctor-career-information-526008-8c668a8b26d24854863012e297dbe493.png"
               height="300" width="100%" />
                <div className="container">
                  <div className="carousel-caption text-start">
                   
                    <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyme1BlxFqKhWyRUVOdvzfVfsuQy6xN1nMzQ&usqp=CAU"
               height="300" width="100%" />
        
                <div className="container">
                  <div className="carousel-caption">
                    <h1>Another example headline.</h1>
                    <p>Some representative placeholder content for the second slide of the carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://i.pinimg.com/originals/c0/88/af/c088afd95289a07e6d07c415765cea80.jpg" height="300" width="100%"/>
                <div className="container">
                  <div className="carousel-caption text-end">
                    <h1>One more for good measure.</h1>
                    <p>Some representative placeholder content for the third slide of this carousel.</p>
                    <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
             );
    }
};