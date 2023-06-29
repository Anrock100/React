import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const baseApi = `http://localhost:800/contact`;
  const [contactOrder, setContactOrder] = useState({
    firstname: "",
    lastname: "",
    phoneno: "",
    email: "",
    address: "",
    message: "",
  });
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log(e.target.name);
    setContactOrder({ ...contactOrder, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let contactOrderSubmit = await axios.post(baseApi, contactOrder);
    console.log("Contact details response", contactOrderSubmit);
    alert("Form Submitted successfully");
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br />
                    Fitness
                  </h1>
                  <p className="main-hero-para">
                    Consequat adipisicing Lorem nostrud dolore culpa amet labore
                    veniam dolore. Ex occaecat qui nostrud nulla sunt labore
                    exercitation. Aliqua reprehenderit ut aute veniam l abore eu
                    et ut ex est do sunt tempor. Laboris deserunt anim irure
                    laborum officia laborum occaecat reprehenderit proident
                    mollit ipsum. Tempor aute nulla eu irure. Excepteur
                    voluptate qui consectetur tempor cupidatat ad. Amet aute ad
                    ea et voluptate officia irure cillum laborum velit mollit.
                  </p>

                  <figure>
                    <img
                      src="./images/g9.jpg"
                      alt="contactUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstname"
                          id=""
                          value={contactOrder.firstname}
                          onChange={handleInputs}
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastname"
                          onChange={handleInputs}
                          value={contactOrder.lastname}
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phoneno"
                          onChange={handleInputs}
                          value={contactOrder.phoneno}
                          id=""
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          onChange={handleInputs}
                          value={contactOrder.email}
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                        />
                      </div>
                      <div className="row">
                        <div className="col-12 contact-input-field">
                          <input
                            type="text"
                            id=""
                            onChange={handleInputs}
                            value={contactOrder.address}
                            name="address"
                            className="form-control"
                            placeholder="Add Address"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input
                            type="text"
                            id=""
                            onChange={handleInputs}
                            value={contactOrder.message}
                            name="message"
                            className="form-control"
                            placeholder="Enter Your Message"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para"
                      >
                        I agree that the fitnesshub may contact me at the email
                        address or phone number above.
                      </label>
                    </div>
                    <button type="submit" className="btn btn-style w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
