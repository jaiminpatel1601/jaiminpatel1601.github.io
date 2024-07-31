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
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
    document.getElementById("email").value = "";

  }