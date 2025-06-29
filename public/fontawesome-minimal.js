// Minimal FontAwesome with only needed icons
(function() {
  // Create style element for FontAwesome icons
  const style = document.createElement('style');
  style.textContent = `
    .fab, .fas, .far, .fal, .fad, .fa {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      display: inline-block;
      font-style: normal;
      font-variant: normal;
      text-rendering: auto;
      line-height: 1;
    }
    
    .fab {
      font-family: "Font Awesome 6 Brands";
      font-weight: 400;
    }
    
    .fa-github:before {
      content: "\\f09b";
    }
    
    .fa-linkedin:before {
      content: "\\f08c";
    }
    
    @font-face {
      font-family: "Font Awesome 6 Brands";
      font-style: normal;
      font-weight: 400;
      font-display: block;
      src: url("data:font/woff2;base64,d09GMgABAAAAAAoYAA4AAAAAE6wAAAm5AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhQbIBw0BmAAgQwBNgIkA1gEBgWDAAeHVxtoHNcNhSMAgQ==") format("woff2");
    }
  `;
  
  document.head.appendChild(style);
})();