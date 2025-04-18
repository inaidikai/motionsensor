// This script will help you apply the Duolingo theme to your existing HTML file
// Save this as apply-duolingo-theme.js and run it with Node.js

const fs = require("fs")

// Read your existing HTML file
fs.readFile("index.html", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err)
    return
  }

  // Add Duolingo font
  const fontLink =
    '<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">'
  data = data.replace("</head>", `${fontLink}\n</head>`)

  // Add inline styles
  const inlineStyles = `
  <style>
    /* Duolingo-inspired theme for GymGo */
    :root {
      --duo-green: #58cc02;
      --duo-green-hover: #46a302;
    }
    
    body {
      font-family: 'Nunito', sans-serif !important;
    }
    
    .cursor-pointer, button, [type="button"], [type="submit"] {
      border-radius: 12px !important;
      font-weight: 700 !important;
      border-bottom: 4px solid rgba(0, 0, 0, 0.2) !important;
    }
    
    #resumeBtn, #pauseBtn, #submitWOBtn, #accessCamBtn, #saveSettingsBtn, 
    #scoresOKBtn, #helpOKBtn, #resultOKBtn {
      background-color: var(--duo-green) !important;
      color: white !important;
    }
    
    .bg-amber-300, .bg-yellow-500, .hover\\:bg-amber-500 {
      background-color: var(--duo-green) !important;
    }
    
    #parentWebcamBox {
      border: 4px solid var(--duo-green) !important;
      box-shadow: 0 8px 0 rgba(0, 0, 0, 0.1) !important;
    }
    
    .w-24.h-24.rounded-full {
      border: 4px solid var(--duo-green) !important;
    }
    
    #confidenceBox {
      background-color: var(--duo-green) !important;
    }
  </style>
  `
  data = data.replace("</head>", `${inlineStyles}\n</head>`)

  // Add inline script
  const inlineScript = `
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      // Apply Duolingo green to all yellow/amber elements
      function applyDuolingoColors() {
        document.querySelectorAll('[class*="bg-amber"], [class*="bg-yellow"]').forEach(el => {
          el.style.backgroundColor = '#58cc02';
          el.style.color = 'white';
        });
      }
      
      // Apply colors immediately and periodically
      applyDuolingoColors();
      setInterval(applyDuolingoColors, 1000);
      
      // Add Duolingo mascot
      const parentWebcamBox = document.getElementById('parentWebcamBox');
      if (parentWebcamBox) {
        const mascot = document.createElement('div');
        mascot.style.position = 'absolute';
        mascot.style.bottom = '-20px';
        mascot.style.right = '-20px';
        mascot.style.width = '100px';
        mascot.style.height = '100px';
        mascot.style.backgroundImage = 'url("https://d35aaqx5ub95lt.cloudfront.net/images/owls/duo.svg")';
        mascot.style.backgroundSize = 'contain';
        mascot.style.backgroundRepeat = 'no-repeat';
        mascot.style.backgroundPosition = 'center';
        mascot.style.zIndex = '100';
        mascot.style.transform = 'rotate(10deg)';
        mascot.style.pointerEvents = 'none';
        parentWebcamBox.appendChild(mascot);
      }
    });
  </script>
  `
  data = data.replace("</body>", `${inlineScript}\n</body>`)

  // Write the modified HTML back to a new file
  fs.writeFile("index-duolingo.html", data, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err)
      return
    }
    console.log("Successfully applied Duolingo theme to index-duolingo.html")
  })
})

