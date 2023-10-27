import React from 'react'
import "./Gallery.css"

const Gallery = () => {
    return (
        <>

            <div class="container px-4 mt-5 mb-5" id="featured-3">
                <h2 class="pb-2 border-bottom text-center border rounded bg-light ">AI<span class="text-primary">Gallery</span> </h2>
            </div>

            <div className="g2">
                <div className="left_text">
                    <h2 className='heading'> AI</h2>
                    <p className='subheading'>Success in creating AI would be the biggest event in human history. Unfortunately, it might also be the last, unless we learn how to avoid the risks.</p>
                    <h4 className='subheading' > Stephen Hawking </h4>
                </div>
                <div className="Gallery">
                    <div className="box row-2" style={{ backgroundImage: `URL("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUklMjBNTHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")` }} ></div>
                    <div className="box col-2" style={{ backgroundImage: `URL( "https://www.state.gov/wp-content/uploads/2021/06/AI-Motherboard-scaled.jpg" )` }} ></div>
                    <div className="box" style={{ backgroundImage: `URL("https://ashokveda.com/uploads/images/202306/image_870x_649154bc7610a.jpg")` }} ></div>
                    <div className="box row-2" style={{ backgroundImage: `URL("https://images.nightcafe.studio//assets/tdraw-girl.jpg?tr=w-1200,c-at_max")` }} ></div>
                    <div className="box col-2" style={{ backgroundImage: `URL("https://hotpot.ai/images/site/ai/art_maker/teaser.jpg")` }} ></div>
                    <div className="box" style={{ backgroundImage: `URL("https://us.123rf.com/450wm/sorapop/sorapop2304/sorapop230401161/203511571-an-innovative-light-bulb-glowing-in-soil-signifies-the-creative-idea-of-sustainable-energy-and.jpg?ver=6")` }} ></div>
                    <div className="box col-2" style={{ backgroundImage: `URL("https://www.unite.ai/wp-content/uploads/2023/07/Alex_Mc_hyper_realistic_technological_city_230a01ec-19c2-4154-b95e-ea6ea8996936.jpg")` }} ></div>

                </div>
            </div>
            <div className="g2">

                <div className="Gallery">

                    <div className="box row-2" style={{ backgroundImage: `URL("https://imageio.forbes.com/specials-images/imageserve/63f8118ae17897a4890f01a1/0x0.jpg?format=jpg&width=1200")` }} ></div>
                    <div className="box col-2" style={{ backgroundImage: `URL( "https://easywithai.com/storage/2023/01/Midjourney.png" )` }} ></div>
                    <div className="box" style={{ backgroundImage: `URL("https://wp.technologyreview.com/wp-content/uploads/2023/06/192826007_tree_tech_1200-1.png?w=1200")` }} ></div>
                    <div className="box row-2" style={{ backgroundImage: `URL("https://approachableai.com/wp-content/uploads/2023/03/best-ai-voice-changer-feature.png")` }} ></div>
                    <div className="box col-2" style={{ backgroundImage: `URL("https://futurism.com/_next/image?url=https%3A%2F%2Fwp-assets.futurism.com%2F2023%2F01%2Fartists-sue-stabile-diffusion-midjourney.jpg&w=2048&q=75")` }} ></div>
                    <div className="box" style={{ backgroundImage: `URL("https://www.shutterstock.com/shutterstock/photos/2288372371/display_1500/stock-vector--d-artificial-intelligence-digital-brain-neural-network-ai-servers-and-robots-technology-2288372371.jpg")` }} ></div>
                    <div className="box col-2" style={{ backgroundImage: `URL("https://www.premierbpo.com/wp-content/uploads/2023/02/chatbot-3d-illustration-concept-web-app-using-nlp-engage-conversation-1-scaled.jpg")` }} ></div>
                </div>
                <div className="left_text">
                    <h2 className='heading'>ML</h2>
                    <p className='subheading'>The key to artificial intelligence has always been the representation  </p>
                    <h4 className='subheading'>Jeff Hawkins</h4>
                </div>
            </div>

        </>
    )
}

export default Gallery