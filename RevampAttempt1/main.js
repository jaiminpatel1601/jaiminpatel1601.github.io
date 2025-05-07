var slideshows = document.querySelectorAll('[data-component="projects"]');
  
// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

  var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] div.project`); // Get an array of slides

  var index = 0, time = 5000;
  slides[index].classList.add('active');  
  
  setInterval( () => {
    slides[index].classList.remove('active');
    
    //Go over each slide incrementing the index
    index++;
    
    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0; 
    
    slides[index].classList.add('active');

  }, time);
}


function sendEmail(){
  var name = document.getElementById("name").value;
  var body_message = document.getElementById("message").value;
  body_message = body_message.replace(new RegExp('\r?\n','g'), "<br />");
  var email = document.getElementById("email").value;
  Email.send({
    SecureToken : "b57c50ec-9e24-415b-bd62-3cfcedb163d7",
    To : 'jaimin.patel1601@gmail.com',
    From : "jaiminthelegend16@gmail.com",
    Subject : "Message from "+name+" through website contact form",
    Body : body_message+"<br /><br /> Contact info: "+email
  }).then(message => alert("Thank you for contacting me, I would reach out to you as soon as possible.")
  );
    
}
