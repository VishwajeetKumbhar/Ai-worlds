import React from 'react'


const Bigimg = () => {
    return (
        <>
            <div class="jumbotron mt-5 justify-content-center align-items-center text-center  " data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                <div class="container  justify-content-center align-items-center text-center  ">
                    <h1 class="display-3 fw-bold ">The place to go for  <span class="text-primary">AI Tools.</span></h1>
                    <div className="input-group mb-3 mt-5 w-50 mx-auto ">
                        <input className='inputboxx' type="text" class="form-control" placeholder="Search Ai Tool" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span class="input-group-text" >@</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bigimg