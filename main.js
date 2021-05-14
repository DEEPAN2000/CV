
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.big-heading',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.container-fluid',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
/*SCROLL ABOUT*/
sr.reveal('.section-title',{}); 
sr.reveal('.feature-title',{delay: 400}); 
sr.reveal('.ico',{delay: 400});
//sr.reveal('.',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.feature-box',{}); 
sr.reveal('.row skills-content',{}); 

/*SCROLL CONTACT*/
sr.reveal('.container',{interval: 200}); 
