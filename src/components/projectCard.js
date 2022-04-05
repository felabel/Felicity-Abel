import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className='w-full bg-about-bg' id='projects'>
            
            <section className=" portfolio-section mx-auto mb-4 md:mb-4 lg:mb-4 container" id='portfolio'> 
                        <div className="header portfolio-header mb-2"> 
                            <div className='inner'> 
                                <div data-aos='fade-up'> 
                                    <h1 className="text-center text-xl text-purple tracking-wide font-semibold py-5 fade-up" data-aos='fade-up' data-aos-delay='100' data-aos-duration='500'>My Projects <p className='h-1 w-14 mb-0.5 bg-purple inline-block' ></p></h1>

                                </div> 
                                <h1 className=" text-center text-2xl text-gray-100 tracking-wide font-semibold pb-5 capitalize" data-aos='fade-up' data-aos-delay='250' data-aos-duration='500'>my projects</h1>

                                <div className='flex-container grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  w-full ' data-aos='fade'> 
                                        {/* card 1    */}
                                    <div className="profile-container port-container-1"> 
                                        <div className='profile-wrapper'> 
                                            <div className='profile-card'> 
                                                <h4>Breaking Bad Casts</h4> 
                                                <p>A furniture e-commerce website built with: React, TailwindCss and Redux for state Management<span className="text-purple">REACT</span>  </p> 
                                                <a href='https://furniture-self.vercel.app/shop' target='_blank'>View Website</a> 
                                            </div> 
                                        </div> 
                                    </div> 
                                </div>
                            </div>
                        </div>
            </section>
        </div>
    )
}
