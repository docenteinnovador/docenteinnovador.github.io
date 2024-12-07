const typed = new Typed(".auto-type", {
    typeSpeed: 100,
    strings: ["Innovación", "Enseñanza", "Aprendizaje","Tecnología","Conocimiento"],
    backSpeed: 100,
    loop: true,
  });
  
  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  
  menuIcon.addEventListener("click", ()=>{
      menuIcon.classList.toggle("bx-x")
      navbar.classList.toggle("active")
  })
  
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  
  window.onscroll = () => {
      sections.forEach(section => {
  
          let top = window.scrollY;
          let offset = section.offsetTop - 150;
          let height = section.offsetHeight;
          let id = section.getAttribute("id");
  
          if(top >= offset && top < offset + height){
              navLinks.forEach(link => {
                  link.classList.remove("active");
                  document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
              })
          }
      });


      const header = document.querySelector("header");
      header.classList.toggle('sticky', window.scrollY > 100);
  

      menuIcon.classList.remove("bx-x")
      navbar.classList.remove("active")
  
  };
  