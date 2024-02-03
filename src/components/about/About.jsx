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
                                    <h3>Full Stack Developer en Costa Rica</h3>
                                </div>
                                <div
                                    className="text"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <p>
                                        Desarrollador Web Jr y ansioso por dar el siguiente paso en mi carrera.
                                        Con una base sólida en desarrollo y un ardiente deseo de ampliar mis habilidades,
                                        Listo para afrontar nuevos desafíos y contribuir a proyectos de desarrollo,
                                        Estoy entusiasmado con todos los aspectos del proceso de desarrollo, desde la lluvia de ideas y la colaboración.
                                        Comprometido con el aprendizaje y crecimiento continuo en el mundo del desarrollo web, con énfasis específico en React.


                                    </p>
                                </div>
                                <div
                                    className="shane_tm_button"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <a href="img/resume/resume.jpg" download>
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
