import React from "react";

const About = () => {
    return (
        <>
            <div className="shane_tm_section" id="about">
                <div className="shane_tm_about">
                    <div className="container">
                        <div className="about_inner">
                            <div className="left">
                                <div
                                    className="image"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <img src="/img/placeholders/1-1.jpg" alt="placeholder" />
                                    <div
                                        className="main"
                                        style={{ backgroundImage: "url(img/about/1.jpg)" }}
                                    ></div>
                                </div>

                                {/* End image */}
                            </div>
                            {/* End left */}

                            <div className="right">
                                <div
                                    className="shane_tm_title"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <span>About Me</span>
                                    <h3>Full-Stack Developer en Costa Rica</h3>
                                </div>
                                <div
                                    className="text"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <p>
                                        Me llamo Josue Guido pero mis amigos me llaman Guido.

                                        <strong
                                        >+1 año de experiencia.Creando paginas web desde el lado del cliente como del servidor.
                                        </strong>.
                                    </p>



                                    <p>
                                        Disfruto explorando las buenas prácticas en programación, desde el uso de HTML semántico hasta la implementación de principios de "clean code" y testing.
                                        <strong
                                        > Actualmente, estoy trabajando en la creación de un blog donde compartiré recursos y guías para contribuir a la comunidad de desarrolladores a escribir codigo de gran calidad.
                                        </strong>
                                    </p>

                                </div>
                                <div
                                    className="shane_tm_button"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <a href="img/resume/" download>
                                        Download CV
                                    </a>
                                </div>
                            </div>
                            {/* End right */}
                        </div>
                    </div>
                    {/* End container */}
                </div>
            </div>
        </>
    );
};

export default About;
