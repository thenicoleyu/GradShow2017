$(window).on("load", function() {
   // aquarelle effect created by https://github.com/Ramotion/aquarelle
   var fade = document.querySelector('.fade');
   var topNav = document.querySelector('.social-media');
   var immLogo = document.querySelector('#logo');
   var title = document.querySelector('.title');
   var subtitle = document.querySelector('.subtitle');
   var arrow = document.querySelector('#arrow');
   var date = Array.prototype.slice.call(document.querySelectorAll('.date'));

   var image = document.getElementsByTagName('img')[0]; // splash
   var aquarelle = new Aquarelle(image, 'img/mask.png', {
      autoplay: true,
      loop: false,
      duration: 4500,
   });

   aquarelle.addEventListener('created', function() {
      var canvas = this.getCanvas();
      canvas.removeAttribute('style');
      image.parentNode.insertBefore(canvas, image.nextSibling);
      image.parentNode.removeChild(image);
   });

   aquarelle.addEventListener('changed', function(event) {
      fade.style.opacity = this.transitionInRange(1, 0.9, 7183, 7933);
      topNav.style.opacity = this.transitionInRange(0, 1, 3600, 4500);
      arrow.style.opacity = this.transitionInRange(0, 1, 4200, 4500);

      var canvas = this.getCanvas();
      canvas.style.webkitFilter = 'blur(' + this.transitionInRange(0, 24, 1000) + 'px)';
      canvas.style.webkitTransform = canvas.style.transform = 'translate(-50%, -50%) scale(' + this.transitionInRange(.75, 1) + ')';

      immLogo.style.opacity = this.transitionInRange(0, 1, 0, 2016);
      immLogo.style.webkitTransform = immLogo.style.transform = 'scale(' + this.transitionInRange(0.65, 0.8, 0, 5500) + ')';

      title.style.opacity = this.transitionInRange(0, 1, 0, 2016);
      title.style.webkitTransform = title.style.transform = 'scale(' + this.transitionInRange(0.9, 1.1, 0, 5500) + ')';

      subtitle.style.opacity = this.transitionInRange(0, 1, 0, 2016);
      subtitle.style.webkitTransform = subtitle.style.transform = 'scale(' + this.transitionInRange(.8, 1, 0, 5500) + ')';

      date.forEach(function(elem) {
           elem.style.webkitFilter = 'blur(' + event.target.transitionInRange(4, 0, 3200, 4000) + 'px)';
           elem.style.opacity = event.target.transitionInRange(0, 1, 3000, 4066);
           elem.style.webkitTransform = elem.style.transform = 'scale(' + event.target.transitionInRange(1.3, 1, 3600, 4200) + ')';
      });
   });

   $("a").on("click", function(event){
      if (this.hash !== "") {
         event.preventDefault();

         var hash = this.hash;
         $("html, body").animate({
            scrollTop: $( $.attr(this, "href") ).offset().top
         }, 500);
         window.location.hash = hash;
      }
   });

   $(".student").on("click", function() {
      console.log("clicky student");

      $("#student-box").removeClass("dn").addClass("flex");
      $("#student-dim").removeClass("dn");
   });

   $("#close").on("click", function() {
      $("#student-box").addClass("dn").removeClass("flex");
      $("#student-dim").addClass("dn");
   });

   function openInfo(student) {
      $("#" + student).on("click", function() {
         $("#student-img").attr("src", "img/students/" + student + "2.jpg");
         $("#student-name").html(studentName[student]);
         $("#student-title").html(studentTitle[student]);
         $("#student-quote").html(studentQuote[student]);
         $("#student-linkedin").attr("href", studentLinkedin[student]);
         $("#student-github").attr("href", studentGithub[student]);
         $("#student-twitter").attr("href", studentTwitter[student]);
         $("#student-portfolio").attr("href", studentPortfolio[student]);
      });
   };

   var students = ["ali", "amnon", "ben", "chibuzo", "christy", "daisy", "elaine", "gustavo", "julien", "laura", "lauren", "linus", "lulu", "madzia", "meagan", "mengsi", "natalia", "natasha", "nick",
   "nicole", "paul", "priyanka", "rachel", "vladan", "ziqin"];

   students.forEach(function(student) {
      openInfo(student);

      $("#" + student).on("mouseenter", function() {
         $("#" + student + " img:first-child").addClass("dn");
         $("#" + student + " img:nth-child(2)").removeClass("dn");
      });

      $("#" + student).on("mouseleave", function() {
         $("#" + student + " img:first-child").removeClass("dn");
         $("#" + student + " img:nth-child(2)").addClass("dn");
      });
   });
})
