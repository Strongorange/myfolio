import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Fade } from "react-awesome-reveal";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine): Promise<void> => {
    loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );

  return (
    <Fade duration={2000} triggerOnce={true}>
      <Particles
        options={{
          preset: "starts",
          particles: {
            move: {
              direction: "bottom",
              enable: true,
              outModes: {
                default: "bounce",
              },
              speed: 1,
              random: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 30,
            },
            opacity: {
              value: { min: 0.3, max: 1 },
              animation: {
                enable: true,
                speed: 3,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        init={particlesInit}
        loaded={particlesLoaded}
      />
    </Fade>
  );
};

export default Particle;
