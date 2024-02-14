"use client";

import { useCallback, useMemo } from "react";
import Particles from "react-particles";
import { useMediaQuery } from "react-responsive";
import { loadFull } from "tsparticles";

const ReactParticles = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  const options: any = useMemo(
    () => ({
      background: {
        color: {
          value: "#090911",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
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
          value: "#fb5343",
        },
        links: {
          color: "#6549d5",
          distance: 120,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: false,
          },
          value: isMobile ? 80 : 150,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [isMobile]
  );

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={options}
        className="absolute -z-30"
      />
    </>
  );
};

export default ReactParticles;
