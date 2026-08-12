

    <!------------------------------JAVASCRIPT------------------------------->

    
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    

    
    
    <script src="script.js"></script>
    <script src="YouTubePopUp.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>



    <script>


        document.addEventListener('DOMContentLoaded', () => {
            const proImage = document.getElementById('proImage');
            const leftArrow = document.getElementById('left-arrow');
            const rightArrow = document.getElementById('right-arrow');

            // Scroll left function
            leftArrow.addEventListener('click', () => {
                proImage.scrollBy({
                    top: 0,
                    left: -proImage.clientWidth + 10, // Adjust scroll amount as needed
                    behavior: 'smooth' // Smooth scroll
                });
            });

            // Scroll right function
            rightArrow.addEventListener('click', () => {
                proImage.scrollBy({
                    top: 0,
                    left: proImage.clientWidth + 10, // Adjust scroll amount as needed
                    behavior: 'smooth' // Smooth scroll
                });
            });
        });


        ////TOGGLE FOR TEAM

        document.querySelectorAll('.toggle-info').forEach(icon => {
        icon.addEventListener('click', function() {
            const details = this.closest('.team-member').querySelector('.details');
            const isOpen = this.classList.contains('fa-minus-circle');

            if (isOpen) {
                this.classList.remove('fa-minus-circle');
                this.classList.add('fa-plus-circle');
                details.style.display = 'none';
            } else {
                this.classList.remove('fa-plus-circle');
                this.classList.add('fa-minus-circle');
                details.style.display = 'block';
            }
        });
    });





    </script>



    <script>
        AOS.init({
            duration: 1000,
            once: true,
        });


    </script>


    

    
</body>
</html>