function scrollToSection(sectionId) {
    const targetSection = document.querySelector(sectionId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }