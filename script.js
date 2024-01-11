document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    function showSlide(index) {
        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        showSlide(currentIndex);
    }

    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
});


document.addEventListener("DOMContentLoaded", function() {
    var myModal = document.getElementById("myModal");
    myModal.style.display = "block";
    document.body.classList.add("modal-open"); 
  

    myModal.getElementsByClassName("close")[0].addEventListener("click", function() {
      myModal.style.display = "none";
      document.body.classList.remove("modal-open"); 
    });
  
  
    window.addEventListener("click", function(event) {
      if (event.target === myModal) {
        myModal.style.display = "none";
        document.body.classList.remove("modal-open"); 
      }н
    });
  });
  

  function openYandexMap() {
   
    const targetLatitude = 55.848122;
    const targetLongitude = 37.489795;
  
   
    const targetLatitude2 = 55.7539; 
    const targetLongitude2 = 37.6208;
  
    
    const targetLatitude3 = 55.801553;   
    const targetLongitude3 = 37.575752;
  
    const mapURL = `https://yandex.ru/maps/?pt=${targetLongitude},${targetLatitude}~${targetLongitude2},${targetLatitude2}
    ~${targetLongitude3},${targetLatitude3}&z=12`;
  
    window.open(mapURL, '_blank');
  }
  
  
  