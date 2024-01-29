
window.onload = function() {
  var cvIcon = document.getElementById('cv');

  if (cvIcon) {
    cvIcon.addEventListener('click', function(event) {
      event.preventDefault();
      window.open('resume.pdf', '_blank');
    });
  }
};

function update(link) {
    // Remove active class from all buttons
    document.querySelectorAll('.right-ul li a ').forEach(btn => btn.classList.remove('active'));
  
    // Add active class to the clicked button
   
    link.classList.add('active');
    console.log("added");
}



document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage==="research.html"){
        document.querySelector("#research").classList.add("active");
    }
    else if (currentPage==="index.html"){
        document.querySelector("#index").classList.add("active");
    }
    else if (currentPage==="gadgets.html"){
        document.querySelector("#gadgets").classList.add("active");
    }
  });