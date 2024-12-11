const element = document.getElementById('hero-row');
  const mq = window.matchMedia('(max-width: 768px)');

        // Function to handle the media query change
        function handleScreenResize(event) {

            if (event.matches) {
                console.log(event)
                // Remove the ID when the screen is 768px or smaller
                element.removeAttribute('id');
                console.log('ID removed');
            } else {
                // Optionally re-add the ID if the screen is larger
                element.setAttribute('id', 'myElement');
                console.log('ID added back');
            }
        }

        // Add the listener to the media query
        mq.addEventListener('change', handleScreenResize);

        // Run the function initially to check current screen size
        handleScreenResize(mq);