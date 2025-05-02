import React from 'react';

const Contact = () => {
    return (
      <div className="container" style={{ textAlign: 'center', marginTop: '10px' }}>
        <h2>Contact Us</h2>
        <form style={{ width: '100%', margin: 'auto' }}>
  
          <div style={{ display: 'left', flexDirection: 'column', alignItems: 'center', textAlign: 'left', maxWidth: '100%' }}>
              <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
              <label htmlFor="emailAddress" className="form-label">Email Address</label>
              <input type="email" className="form-control" id="emailAddress" placeholder="Enter your email address" />
              </div>
              <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </div>
  
        </form>
      </div>
    );
  };
  
  export default Contact;