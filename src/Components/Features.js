import React from 'react'
import "../App.css"
import "./style.css"

const Features = () => {
    return (
        <>
            <div class="container  px-4 py-5" id="featured-3">
                <h2 class="pb-2 border-bottom text-center border rounded bg-light ">AI <span class="text-primary">Features</span></h2>
                <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">

                    <div class="feature col" data-aos="zoom-in-right">
                        <i class="fa fa-users bg-primary p-2 text-white rounded mb-2"></i>
                        <h3 class="fs-2">Eliminate dull tasks.</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>

                    <div class="feature col " data-aos="zoom-in-up">
                        <i class="fa-solid fa-database bg-primary p-2 text-white rounded mb-2"></i>
                        <h3 class="fs-2">Data ingestion.</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>

                    <div class="feature col" data-aos="zoom-in-left">
                        <i class="fa-solid fa-person bg-primary p-2 text-white rounded mb-2"></i>
                        <h3 class="fs-2">Imitates human cognition.</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div class="feature col" data-aos="zoom-in-right">
                        <i class="fa-solid fa-rocket bg-primary p-2 text-white rounded mb-2"></i>
                        <h3 class="fs-2">Futuristic.</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div class="feature col" data-aos="zoom-in-up">
                        <i class="fa-solid fa-tree bg-primary p-2 text-white rounded mb-2"></i>
                        <h3 class="fs-2">Prevent natural disasters.</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                    <div class="feature col" data-aos="zoom-in-left">
                        <i class="fa-sharp fa-solid fa-face-smile bg-primary p-2 text-white rounded mb-2"></i>
                        <h3 class="fs-2">Facial Recognition and Chatbots.</h3>
                        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features