function update(link) {
    console.log("yes");
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