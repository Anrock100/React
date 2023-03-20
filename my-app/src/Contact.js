import React from 'react'

const Contact = () => {
  return (
    <>
    <section className='contactus-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='contact-leftside col-12 col-lg-5'>
                            <h1 className='main-heading fw-bold'>Connect With Our <br />Fitness</h1>
                            <p className='main-hero-para'>Consequat adipisicing Lorem nostrud dolore culpa amet labore veniam dolore.
                             Ex occaecat qui nostrud nulla sunt labore exercitation. Aliqua reprehenderit ut aute veniam l
                             abore eu et ut ex est do sunt tempor. Laboris deserunt anim irure laborum officia laborum 
                             occaecat reprehenderit proident mollit ipsum. Tempor aute nulla eu irure. Excepteur voluptate 
                             qui consectetur tempor cupidatat ad. Amet aute ad ea et voluptate officia irure cillum laborum velit mollit.</p>

                             <figure><img src="./images/g9.jpg" alt="contactUsImg" className='img-fluid' /></figure>
                             
                        </div>
                        <div className='contact-rightside col-12 col-lg-7'>
                            <form method='POST'>

                                
                                    <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-field'> 
                                    <input type="text" 
                                    name=''
                                     id=''
                                     className='form-control'
                                     placeholder='First Name'/>
                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-field'> 

                                    <input type="text" 
                                    name=''
                                     id=''
                                     className='form-control'
                                     placeholder='Last Name'/>
                                    </div>

                                    </div>
                                    <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-field'> 

                                    <input type="text" 
                                    name=''
                                     id=''
                                     className='form-control'
                                     placeholder='Phone Number'/>
                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-field'> 

                                    <input type="text" 
                                    name=''
                                     id=''
                                     className='form-control'
                                     placeholder='Email ID'/>
                                    </div>
                                    <div className='row'>
                                    <div className='col-12 contact-input-field'> 


                                            <input type="text" 
                                            id=''
                                            name=''
                                            className='form-control'
                                            placeholder='Add Address'/>
                                        </div>
                                    </div>
                                    <div className='row'>
                                    <div className='col-12'> 


                                            <input type="text" 
                                            id=''
                                            name=''
                                            className='form-control'
                                            placeholder='Enter Your Message'/>
                                        </div>
                                    </div>
                                    </div>
                                    <div class="form-check form-checkbox-style">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" 
                                className='main-hero-para'>
                                        I agree that the fitnesshub may contact me at the email address or phone number above.
                                    </label>
                                    </div>
                                    <button type='submit' className='btn btn-style w-100'>
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
  )
}

export default Contact
