function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = "block";
    var tick = function() {
      element.style.opacity = +element.style.opacity + 0.03;
      if (+element.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }
  
  function fadeOut(element, callback) {
    element.style.opacity = 1;
    var tick = function() {
      element.style.opacity = +element.style.opacity - 0.03;
      if (+element.style.opacity > 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      } else {
        element.style.display = "none";
        if (typeof callback === "function") {
          callback();
        }
      }
    };
    tick();
  }
  
  function showModal() {
    var modal = document.getElementById("myModal");
    fadeIn(modal);
  }
  
  function hideModal() {
    var modal = document.getElementById("myModal");
    fadeOut(modal);
  }
  
  // Close the modal when the close button is clicked
  var closeButton = document.querySelector(".close");
  if (closeButton) {
    closeButton.addEventListener("click", hideModal);
  }
  
  // Close the modal when clicking outside the modal content
  window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
      hideModal();
    }
  });
  



    var currentImageIndex = 0;
    var galleryImages = document.querySelectorAll('.gallery img');

    function openModal() {
    document.getElementById('myModal').style.display = 'block';
    showImage(currentImageIndex);
    }

    function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    }

    function changeImage(n) {
    showImage(currentImageIndex += n);
    }

    function showImage(index) {
    if (index >= galleryImages.length) {
        currentImageIndex = 0;
    } else if (index < 0) {
        currentImageIndex = galleryImages.length - 1;
    } else {
        currentImageIndex = index;
    }

    // Hide all images
    galleryImages.forEach(image => image.style.display = 'none');

    // Show the current image
    galleryImages[currentImageIndex].style.display = 'block';
    }

    // Show the modal when clicked on an image
    galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex = index;
        openModal();
    });
    });

    // Show the first image initially
    showImage(currentImageIndex);
