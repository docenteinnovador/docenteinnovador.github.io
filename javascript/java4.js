// Configuración de partículas
tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    },
    shape: {
      type: "circle",
      image: []
    },
    opacity: {
      value: 0.9,
      random: true
    },
    size: {
      value: 10,
      random: false
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    },
    rotate: {
      value: 45,
      random: true,
      animation: {
        enable: true,
        speed: 10,
        sync: false
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// Función para mostrar la descripción específica al hacer clic en cada imagen
function showDescription(id) {
  // Ocultar todas las descripciones primero
  document.querySelectorAll('.description').forEach(desc => {
    desc.classList.remove('active');
  });

  // Mostrar solo la descripción correspondiente
  const description = document.getElementById(id);
  description.classList.add('active');
}
