        let index = 0;
        const images = document.querySelectorAll(".carousel img");
        const totalImages = images.length;

        function showImage(i) {
            images.forEach(img => img.classList.remove("active"));
            images[i].classList.add("active");
        }
        
        function nextImage() {
            index = (index + 1) % totalImages;
            showImage(index);
        }

        function prevImage() {
            index = (index - 1 + totalImages) % totalImages;
            showImage(index);
        }
        
        document.querySelector(".next").addEventListener("click", nextImage);
        document.querySelector(".prev").addEventListener("click", prevImage);
        
        setInterval(nextImage, 5000);
