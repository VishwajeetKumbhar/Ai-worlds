import React, { useEffect } from 'react'
import Features from './Features'
import Footer from './Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Home.css"
import Bigimg from './Bigimg';
    

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])
    return (
        <>
            <Bigimg/>
            <Features/>
            <div class="b-example-divider"></div>
            <div class="container px-4 mt-5" id="featured-3">
                <h2 class="pb-2 border-bottom text-center border rounded bg-light ">Best <span class="text-primary">Ai</span> Tools</h2>
            </div>



            <div class="container col-xxl-8 px-4 py-2 tools">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6" data-aos="zoom-in-up">
                        <img src="13.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6" data-aos="zoom-in-up">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3"> Chat GPT</h1>
                        <p class="lead">We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a type="button" href="https://chat.openai.com/auth/login" target="_blank" class="btn btn-primary btn-lg px-4 me-md-2">Try It</a>
                            <button type="button" class="btn btn-secondary btn-lg px-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Features</button>
                        </div>
                    </div>
                </div>
                <div className='png' >
                    <img id='images' src="volly.png" alt="Volly" />
                </div>
            </div>

            <hr />


            <div class="b-example-divider"></div>

            <div class="container col-xxl-8 px-4 py-2 ">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-lg-6" data-aos="zoom-in-up">
                        <h1 class="display-5 fw-bold text-body-emphasis  lh-1 mb-3">Midjourney</h1>
                        <p class="lead">Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species.
                            We are a small self-funded team focused on design, human infrastructure, and AI. We have 11 full-time staff and an incredible set of advisors.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a type="button" href="https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F" target="_blank" class="btn btn-primary btn-lg px-4 me-md-2">Try It</a>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Features</button>
                        </div>
                    </div>
                    <div class="col-10 col-sm-8 col-lg-6" data-aos="zoom-in-up">
                        <img src="12.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

            <hr />

            <div class="b-example-divider"></div>

            <div class="container col-xxl-8 px-4 py-2 tools">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6" data-aos="zoom-in-up">
                        <img src="14.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6" data-aos="zoom-in-up">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Voice Ai</h1>
                        <p class="lead">Choose from 1000s of different voices in Voice Universe - our huge UGC voice library. The possibilities are endless, whether you're playing Minecraft, Fortnite, Among Us or others of your favourite video games! Create a new vocal identity and explore our many voice effects with the best voice changer online.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a type="button" href="https://voice.ai/" target="_blank" class="btn btn-primary btn-lg px-4 me-md-2">Try it</a>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Features</button>
                        </div>
                    </div>
                </div>
                <div className='png' >
                    <img id='images1' src="music.png" alt="music" />
                </div>
            </div>

            <hr />

            <div class="b-example-divider"></div>

            <div class="container col-xxl-8 px-4 py-2">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-lg-6" data-aos="zoom-in-up">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Synthesia</h1>
                        <p class="lead">Synthesia Allows You To Create Videos From Plain Text In Minutes. Try It Out For Free Now. 100+ Quality Avatars. 80+ Languages. Explore Resources. Browse Features. View Products. View Products. Features. Browse Features. Easy To Use. Explore Resources.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a type="button" href="https://www.synthesia.io/?via=sign-up-free&keyword=synthesia&device=c&placement=&gclid=CjwKCAjw9J2iBhBPEiwAErwpeXj9PWXEKT7ttZB3EbxlYKS8TJqFgaXSj8l-l4YqVjCrTWvPMDeeMxoCk3EQAvD_BwE" target="_blank" class="btn btn-primary btn-lg px-4 me-md-2">Try it</a>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Features</button>
                        </div>
                    </div>
                    <div class="col-10 col-sm-8 col-lg-6" data-aos="zoom-in-up">
                        <img src="15.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

            <hr />

            <div class="b-example-divider"></div>

            <div class="container col-xxl-8 px-4 py-2 tools">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6" data-aos="zoom-in-up">
                        <img src="16.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6" data-aos="zoom-in-up">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3"> Sembly</h1>
                        <p class="lead">Sembly automatically identifies risk items for products or processes and provides a complete picture of important discussion points that can be quickly ...</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a type="button" href="https://www.sembly.ai/" target="_blank" class="btn btn-primary btn-lg px-4 me-md-2">Try It</a>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Features</button>
                        </div>
                    </div>
                </div>
                <div className='png' >
                    <img id='images' src="hammer.png" alt="" />
                </div>
            </div>

            <hr />

            <div class="b-example-divider"></div>

            <div class="container col-xxl-8 px-4 py-2">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-lg-6" data-aos="zoom-in-up">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Poised Ai</h1>
                        <p class="lead">Through the power of AI, Poised provides actionable communication guidance so you can influence and inspire. Private and secure feedback that only you can see. For Mac and Windows.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a type="button" href="https://www.poised.com/" target="_blank" class="btn btn-primary btn-lg px-4 me-md-2">Try it</a>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Features</button>
                        </div>
                    </div>
                    <div class="col-10 col-sm-8 col-lg-6" data-aos="zoom-in-up">
                        <img src="17.jpg" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

            <hr />

            <div class="b-example-divider"></div>

            <div class="container col-xxl-8 px-4 py-2 tools">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6" data-aos="zoom-in-up">
                        <img src="./21.webp" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6" data-aos="zoom-in-up">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3"> Tome</h1>
                        <p class="lead">Sembly automatically identifies risk items for products or processes and provides a complete picture of important discussion points that can be quickly ...</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a type="button" href="https://www.sembly.ai/" target="_blank" class="btn btn-primary btn-lg px-4 me-md-2">Try It</a>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Features</button>
                        </div>
                    </div>
                </div>
                <div className='png' >
                    <img id='images2' src="robot.png" alt="" />
                </div>
            </div>

            <hr />

            <div class="b-example-divider"></div>

            <div class="container col-xxl-8 px-4 py-2">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-lg-6" data-aos="zoom-in-up">
                        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Mixo AI</h1>
                        <p class="lead">Through the power of AI, Poised provides actionable communication guidance so you can influence and inspire. Private and secure feedback that only you can see. For Mac and Windows.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <a type="button" href="https://www.poised.com/" target="_blank" class="btn btn-primary btn-lg px-4 me-md-2">Try it</a>
                            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Features</button>
                        </div>
                    </div>
                    <div class="col-10 col-sm-8 col-lg-6" data-aos="zoom-in-up">
                        <img src="22.webp" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home