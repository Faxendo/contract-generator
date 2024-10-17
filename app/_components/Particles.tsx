"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";

export default function Partcls() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(() => ({
        "background": {
            "color": {
                "value": "#232741"
            }
        },
        "fullScreen": {
            "enable": true,
            "zIndex": -1
        },
        "fpsLimit": 120,
        "interactivity": {
            "modes": {
                "trail": {
                    "delay": 1
                }
            }
        },
        "particles": {
            "move": {
                "enable": true,
                "speed": {
                    "min": 0.1,
                    "max": 1
                },
                "angle": {
                    "value": 90,
                    "offset": 0
                }
            },
            "number": {
                "density": {
                    "enable": true,
                    "width": 1920,
                    "height": 1080
                },
                "value": 160
            },
            "opacity": {
                "value": {
                    "min": 0.1,
                    "max": 1
                },
                "animation": {
                    "enable": true,
                    "speed": 1
                }
            },
            "shape": {
                "type": "circle"
            },
            "size": {
                "value": {
                    "min": 1,
                    "max": 3
                }
            },
            "zIndex": {
                "value": -1
            }
        },
        "pauseOnBlur": true,
        "pauseOnOutsideViewport": true,
        "name": "Stars",
        "motion": {
            "reduce": {
                "factor": 4,
                "value": true
            }
        }
    }), [],);

    if (init) {
        return (
            <Particles
                id="tsparticles"
                options={options}
                particlesLoaded={particlesLoaded}
                className="relative z-[-1]"
                style={{ "zIndex": -1 }}
            />
        );
    }
}
