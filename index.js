//animation
square.onclick = function() {
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    square.style.left = timePassed / 5 + 'px';

    if (timePassed > 2000) clearInterval(timer);

  }, 20);}

//objects
const person = {
contact: "Contact us",
number : 87012120650,
work: "Work Time",
day1: "Mon-Thu:",
day2:"Fri-Sun:",
  };

  document.getElementById("contact").innerHTML =
  person.contact;
  document.getElementById("number").innerHTML =
  person.number;
  var styleArr = document.getElementById('contact');
  styleArr.style.color = 'white';
  var styleArr = document.getElementById('number');
  styleArr.style.color = 'white';

  document.getElementById("worktime").innerHTML =
  person.work;
  document.getElementById("day1").innerHTML =
  person.day1 +" " +  8 + "am" + "-" + 5 + "pm";
  document.getElementById("day2").innerHTML =
  person.day1 +" " +  9 + "am" + "-" + 3 + "pm";

//addEventListener
  document.getElementById("myBtn").addEventListener("click", displayDate);

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }

//jQuery
    $(document).ready(function(){
      $("p").click(function(){
        $(this).hide();
      });
    });

    $(document).ready(function(){
      $("input").focus(function(){
        $(this).css("background-color", "white");
      });
      $("input").blur(function(){
        $(this).css("background-color", "white");
      });
    });


//scroll
    $(document).ready(function(){
      
          $("#menu").on("click","a", function (event) {
      
              event.preventDefault(); 
      
              var id  = $(this).attr('href'),
      
                  top = $(id).offset().top;
      
              $('body,html').animate({scrollTop: top}, 1200);
          });  
      });

    $(document).ready(function(){
      $("#hide").click(function(){
        $("h5").hide();
      });
      $("#show").click(function(){
        $("h5").show();
      });
    });
  
