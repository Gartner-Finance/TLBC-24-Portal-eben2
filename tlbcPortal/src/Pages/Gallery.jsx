import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Gallery.css'

function Gallery() {
    return (
        <>
            <header className="site-header">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12 col-12 d-flex flex-wrap">
                            <p className="d-flex me-4 mb-0">
                                <i className="bi-person custom-icon me-2"></i>
                                <strong className="text-dark">TLBC'24 is almost here</strong>
                            </p>
                        </div>

                    </div>
                </div>
            </header>

            <Navbar />

            <section class="hero-section" id="section_1">
                <div class="container d-flex justify-content-center align-items-center">
                    <div class="">
                        <div class="col-12 mt-4 mb-5 text-center">
                            <h2 class="text-white mb-1" id="annual">Annual TLBC Gallery</h2>
                            {/* <p class="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur saepe
                        quam recusandae totam delectus neque quia quasi maiores, sed quibusdam suscipit qui aut magni
                        obcaecati sint fuga minus a ea?</p> */}
                        </div>
                    </div>
                </div>
            </section>

            <section class="2023">
                <div class="wrapper">
                    <div class="container all-pictures">
                        <h3>TLBC'23</h3>
                        <h4>Theme: <span class="text-danger">Immortality</span></h4>
                        <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
                            consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
                            officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
                            autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
                            Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
                            aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
                        <div class="gallery">
                            <div class="image"><span><img src="public/imagess/image43.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image44.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image45.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image46.jpg" alt=""/></span>
                            </div>
                            <div class="image"><span><img src="public/imagess/image47.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image48.jpg" alt=""/></span></div>
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="details">
                            <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
                            <span class="icon fas fa-times"></span>
                        </div>
                        <div class="image-box">
                            <div class="slide prev"><i class="fas fa-angle-left"></i></div>
                            <div class="slide next"><i class="fas fa-angle-right"></i></div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div class="shadow"></div>
                </div>
            </section>


            <section class="2023">
                <div class="wrapper">
                    <div class="container all-pictures">
                        <h3>TLBC'22</h3>
                        <h4>Theme: <span class="text-danger">Immortality</span></h4>
                        <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
                            consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
                            officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
                            autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
                            Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
                            aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
                        <div class="gallery">
                            <div class="image"><span><img src="public/imagess/image37.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image38.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image39.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image40.jpg" alt=""/></span>
                            </div>
                            <div class="image"><span><img src="public/imagess/image41.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image42.jpg" alt=""/></span></div>
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="details">
                            <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
                            <span class="icon fas fa-times"></span>
                        </div>
                        <div class="image-box">
                            <div class="slide prev"><i class="fas fa-angle-left"></i></div>
                            <div class="slide next"><i class="fas fa-angle-right"></i></div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div class="shadow"></div>
                </div>
            </section>



            <section class="2023">
                <div class="wrapper">
                    <div class="container all-pictures">
                        <h3>TLBC'21</h3>
                        <h4>Theme: <span class="text-danger">Immortality</span></h4>
                        <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
                            consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
                            officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
                            autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
                            Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
                            aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
                        <div class="gallery">
                            <div class="image"><span><img src="public/imagess/image31.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image32.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image33.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image34.jpg" alt=""/></span>
                            </div>
                            <div class="image"><span><img src="public/imagess/image35.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image36.jpg" alt=""/></span></div>
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="details">
                            <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
                            <span class="icon fas fa-times"></span>
                        </div>
                        <div class="image-box">
                            <div class="slide prev"><i class="fas fa-angle-left"></i></div>
                            <div class="slide next"><i class="fas fa-angle-right"></i></div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div class="shadow"></div>
                </div>
            </section>



            <section class="2023">
                <div class="wrapper">
                    <div class="container all-pictures">
                        <h3>TLBC'20</h3>
                        <h4>Theme: <span class="text-danger">Immortality</span></h4>
                        <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
                            consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
                            officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
                            autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
                            Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
                            aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
                        <div class="gallery">
                            <div class="image"><span><img src="public/imagess/image25.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image26.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image27.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image28.jpg" alt=""/></span>
                            </div>
                            <div class="image"><span><img src="public/imagess/image29.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image30.jpg" alt=""/></span></div>
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="details">
                            <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
                            <span class="icon fas fa-times"></span>
                        </div>
                        <div class="image-box">
                            <div class="slide prev"><i class="fas fa-angle-left"></i></div>
                            <div class="slide next"><i class="fas fa-angle-right"></i></div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div class="shadow"></div>
                </div>
            </section>



            <section class="2023">
                <div class="wrapper">
                    <div class="container all-pictures">
                        <h3>TLBC'19</h3>
                        <h4>Theme: <span class="text-danger">Immortality</span></h4>
                        <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
                            consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
                            officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
                            autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
                            Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
                            aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
                        <div class="gallery">
                            <div class="image"><span><img src="public/imagess/image19.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image20.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image21.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image22.jpg" alt=""/></span>
                            </div>
                            <div class="image"><span><img src="public/imagess/image23.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image24.jpg" alt=""/></span></div>
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="details">
                            <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
                            <span class="icon fas fa-times"></span>
                        </div>
                        <div class="image-box">
                            <div class="slide prev"><i class="fas fa-angle-left"></i></div>
                            <div class="slide next"><i class="fas fa-angle-right"></i></div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div class="shadow"></div>
                </div>
            </section>



            <section class="2023">
                <div class="wrapper">
                    <div class="container all-pictures">
                        <h3>TLBC'18</h3>
                        <h4>Theme: <span class="text-danger">Immortality</span></h4>
                        <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
                            consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
                            officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
                            autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
                            Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
                            aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
                        <div class="gallery">
                            <div class="image"><span><img src="public/imagess/image13.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image14.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image15.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image16.jpg" alt=""/></span>
                            </div>
                            <div class="image"><span><img src="public/imagess/image17.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image18.jpg" alt=""/></span></div>
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="details">
                            <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
                            <span class="icon fas fa-times"></span>
                        </div>
                        <div class="image-box">
                            <div class="slide prev"><i class="fas fa-angle-left"></i></div>
                            <div class="slide next"><i class="fas fa-angle-right"></i></div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div class="shadow"></div>
                </div>
            </section>



            <section class="2023">
                <div class="wrapper">
                    <div class="container all-pictures">
                        <h3>TLBC'17</h3>
                        <h4>Theme: <span class="text-danger">Immortality</span></h4>
                        <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
                            consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
                            officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
                            autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
                            Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
                            aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
                        <div class="gallery">
                            <div class="image"><span><img src="public/imagess/image7.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image8.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image9.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image10.jpg" alt=""/></span>
                            </div>
                            <div class="image"><span><img src="public/imagess/image11.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image12.jpg" alt=""/></span></div>
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="details">
                            <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
                            <span class="icon fas fa-times"></span>
                        </div>
                        <div class="image-box">
                            <div class="slide prev"><i class="fas fa-angle-left"></i></div>
                            <div class="slide next"><i class="fas fa-angle-right"></i></div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div class="shadow"></div>
                </div>
            </section>



            <section class="year-one">
                <div class="wrapper">
                    <div class="container all-pictures">
                        <h3>TLBC'16</h3>
                        <h4>Theme: <span class="text-danger">Immortality</span></h4>
                        <p class="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam nisi magnam
                            consequuntur, obcaecati nostrum architecto odio commodi modi dicta sed illum! Blanditiis totam
                            officia, porro in pariatur qui non corrupti quidem nam odio iste exercitationem laborum modi ratione
                            autem perferendis impedit excepturi deleniti laudantium voluptatum obcaecati, molestiae soluta.
                            Repellat hic delectus explicabo doloremque. Soluta explicabo animi, iure vitae eaque, similique
                            aperiam repellendus at voluptatum id totam laboriosam nulla consectetur officiis.</p>
                        <div class="gallery">
                            <div class="image"><span><img src="public/imagess/image1.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image2.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image3.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image4.jpg" alt=""/></span>
                            </div>
                            <div class="image"><span><img src="public/imagess/image5.jpg" alt=""/></span></div>
                            <div class="image"><span><img src="public/imagess/image6.jpg" alt=""/></span></div>
                        </div>
                    </div>
                    <div class="preview-box">
                        <div class="details">
                            <span class="title">Image <p class="current-img"></p> of <p class="total-img"></p></span>
                            <span class="icon fas fa-times"></span>
                        </div>
                        <div class="image-box">
                            <div class="slide prev"><i class="fas fa-angle-left"></i></div>
                            <div class="slide next"><i class="fas fa-angle-right"></i></div>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div class="shadow"></div>
                '</div>'
            </section>

            <Footer />
        </>
    )
}

export default Gallery