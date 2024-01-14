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
  
  function showModal1() {
    var modal1 = document.getElementById("myModal1");
    fadeIn(modal1);
  }
  function hideModal1() {
    var modal1 = document.getElementById("myModal1");
    fadeOut(modal1);
  }

  function showModal2() {
    var modal2 = document.getElementById("myModal2");
    fadeIn(modal2);
  }
  function hideModal2() {
    var modal2 = document.getElementById("myModal2");
    fadeOut(modal2);
  }

  function showModal3() {
    var modal3 = document.getElementById("myModal3");
    fadeIn(modal3);
  }
  function hideModal3() {
    var modal3 = document.getElementById("myModal3");
    fadeOut(modal3);
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
  
  // Close the modal when the close button is clicked
  var closeButton = document.querySelector(".close");
  if (closeButton) {
    closeButton.addEventListener("click", hideModal1);
  }
  // Close the modal when clicking outside the modal content
  window.addEventListener("click", function(event) {
    var modal1 = document.getElementById("myModal1");
    if (event.target === modal1) {
      hideModal1();
    }
  });

  // Close the modal when the close button is clicked
  var closeButton = document.querySelector(".close");
  if (closeButton) {
    closeButton.addEventListener("click", hideModal2);
  }
  // Close the modal when clicking outside the modal content
  window.addEventListener("click", function(event) {
    var modal2 = document.getElementById("myModal2");
    if (event.target === modal2) {
      hideModal2();
    }
  });

    // Close the modal when the close button is clicked
    var closeButton = document.querySelector(".close");
    if (closeButton) {
      closeButton.addEventListener("click", hideModal3);
    }
    // Close the modal when clicking outside the modal content
    window.addEventListener("click", function(event) {
      var modal3 = document.getElementById("myModal3");
      if (event.target === modal3) {
        hideModal3();
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

    var currentImageIndex1 = 0;
    var galleryImages1 = document.querySelectorAll('.gallery1 img');

    function openModal1() {
    document.getElementById('myModal1').style.display = 'block';
    showImage1(currentImageIndex1);
    }

    function closeModal1() {
    document.getElementById('myModal1').style.display = 'none';
    }

    function changeImage1(n) {
    showImage1(currentImageIndex1 += n);
    }

    function showImage1(index) {
    if (index >= galleryImages1.length) {
        currentImageIndex1 = 0;
    } else if (index < 0) {
        currentImageIndex1 = galleryImages1.length - 1;
    } else {
        currentImageIndex1 = index;
    }

    // Hide all images
    galleryImages1.forEach(image => image.style.display = 'none');

    // Show the current image
    galleryImages1[currentImageIndex1].style.display = 'block';
    }

    // Show the modal when clicked on an image
    galleryImages1.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex1 = index;
        openModal1();
    });
    });
    

    // Show the first image initially
    showImage1(currentImageIndex1);


    var currentImageIndex2 = 0;
    var galleryImages2 = document.querySelectorAll('.gallery2 img');

    function openModal2() {
    document.getElementById('myModal2').style.display = 'block';
    showImage2(currentImageIndex2);
    }

    function closeModal2() {
    document.getElementById('myModal2').style.display = 'none';
    }

    function changeImage2(n) {
    showImage2(currentImageIndex2 += n);
    }

    function showImage2(index) {
    if (index >= galleryImages2.length) {
        currentImageIndex2 = 0;
    } else if (index < 0) {
        currentImageIndex2 = galleryImages2.length - 1;
    } else {
        currentImageIndex2 = index;
    }

    // Hide all images
    galleryImages2.forEach(image => image.style.display = 'none');

    // Show the current image
    galleryImages2[currentImageIndex2].style.display = 'block';
    }

    // Show the modal when clicked on an image
    galleryImages2.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex2 = index;
        openModal2();
    });
    });
    

    // Show the first image initially
    showImage2(currentImageIndex2);



    var currentImageIndex3 = 0;
    var galleryImages3 = document.querySelectorAll('.gallery3 img');

    function openModal3() {
    document.getElementById('myModal2').style.display = 'block';
    showImage3(currentImageIndex3);
    }

    function closeModal3() {
    document.getElementById('myModal3').style.display = 'none';
    }

    function changeImage3(n) {
    showImage3(currentImageIndex3 += n);
    }

    function showImage3(index) {
    if (index >= galleryImages3.length) {
        currentImageIndex3 = 0;
    } else if (index < 0) {
        currentImageIndex3 = galleryImages3.length - 1;
    } else {
        currentImageIndex3 = index;
    }

    // Hide all images
    galleryImages3.forEach(image => image.style.display = 'none');

    // Show the current image
    galleryImages3[currentImageIndex3].style.display = 'block';
    }

    // Show the modal when clicked on an image
    galleryImages3.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentImageIndex3 = index;
        openModal3();
    });
    });
    

    // Show the first image initially
    showImage3(currentImageIndex3);
