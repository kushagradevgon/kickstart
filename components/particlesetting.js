import React, {Component} from 'react';
import Particles from 'react-tsparticles';


class ParticleSettings extends Component {
    render () {
        return (
          <div>
              <Particles 
                height = '1000px' width='100vw'
                id="tsparticles"
                options= {
                    {
                        background: {
                            color: {
                                value: '#eb3d34',
                            },
                        },
                        fpslimit: 60,
                        interactivity: {
                            detect_on: 'canvas',
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: 'push',
                                },
                                onhover: {
                                    enable: true,
                                    mode: 'repulse',
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },

                        particles: {
                            color: {
                                value: '#fafafa',
                            },
                            links: {
                                color: "#fafafa",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                             collisions: {
                                 enable: true,
                                 enable: true    ,
                             },
                             move: {
                                 direction: 'none',
                                 enable: true,
                                 outMode: 'bounce',
                                 random: false,
                                 speed: 1,
                                 straight: false, 
                             },
                             number: {
                                density: {
                                    value_area: 800,
                                },
                                value: 80,
                             },
                             opacity: {
                                value: 0.5,
                             },
                             shape: {
                                type: 'circle',
                             },
                             size: {
                                random: true,
                                value: 1,
                             },
                        }
                    }
                }
              />
          </div>
        )
    }
}


export default ParticleSettings