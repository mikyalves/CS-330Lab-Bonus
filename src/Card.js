import React from 'react';

const Card = () => {
    return (
      <div className="cards d-flex justify-content-center align-items-center" style={{ width: '100%', marginLeft: '30px' }}>
        <div className="row justify-content-around" style={{ width: '100%', marginLeft: '30px' }}>
  
          <h2 style={{ fontWeight: 'bold', textAlign: 'left', marginLeft: '15px', marginTop: '10px' }}>
              Cards & Components
          </h2>
  
          <div className="col-md-4 mb-3">
              <div class="card bg-primary text-white" style={{ maxWidth: '18rem', color: 'blue' }}>
                <div class="card-header">Card 01</div>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
          </div>
  
          <div className="col-md-4 mb-3">
            <div class="card bg-danger text-white" style={{ maxWidth: '18rem', color: 'red' }}>
              <div class="card-header">Card 02</div>
              <div class="card-body">
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
  
          <div className="col-md-4 mb-3">
            <div class="card bg-success text-white" style={{ maxWidth: '18rem', color: 'green' }}>
              <div class="card-header">Card 03</div>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default Card;