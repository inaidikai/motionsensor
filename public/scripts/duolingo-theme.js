// Add this script to enhance the Duolingo theme with some interactive elements
// Add this script to enhance the Duolingo theme with some interactive elements
document.addEventListener("DOMContentLoaded", function() {
    console.log("Duolingo theme script loaded");
    
    // Apply Duolingo green to all yellow/amber elements
    function applyDuolingoColors() {
      // Get all elements with amber or yellow background classes
      const amberElements = document.querySelectorAll('[class*="bg-amber"], [class*="bg-yellow"]');
      amberElements.forEach(el => {
        // Replace amber/yellow with Duolingo green
        el.style.backgroundColor = '#58cc02';
        el.style.color = 'white';
      });
      
      // Style buttons
      const buttons = document.querySelectorAll('.cursor-pointer, button, [type="button"], [type="submit"]');
      buttons.forEach(btn => {
        btn.style.borderRadius = '12px';
        btn.style.fontWeight = '700';
        btn.style.borderBottom = '4px solid rgba(0, 0, 0, 0.2)';
      });
      
      // Style primary buttons
      const primaryButtons = document.querySelectorAll('#resumeBtn, #pauseBtn, #submitWOBtn, #accessCamBtn, #saveSettingsBtn, #scoresOKBtn, #helpOKBtn, #resultOKBtn');
      primaryButtons.forEach(btn => {
        btn.style.backgroundColor = '#58cc02';
        btn.style.color = 'white';
      });
      
      // Style the main container background
      const mainContainer = document.querySelector('.bg-white-600');
      if (mainContainer) {
        mainContainer.style.backgroundColor = '#f7f7f7';
      }
      
      // Style the webcam container
      const webcamContainer = document.getElementById('parentWebcamBox');
      if (webcamContainer) {
        webcamContainer.style.backgroundColor = 'white';
        webcamContainer.style.border = '4px solid #58cc02';
        webcamContainer.style.boxShadow = '0 8px 0 rgba(0, 0, 0, 0.1)';
      }
    }
    
    // Apply colors immediately and periodically to catch dynamically added elements
    applyDuolingoColors();
    setInterval(applyDuolingoColors, 1000);
    
    // Track the count value to add celebration animation
    let lastCount = 0;
    
    // Function to check if count has changed
    function checkCountChange() {
      const countElement = document.getElementById("countBox");
      if (!countElement) return;
      
      const currentCount = parseInt(countElement.innerText);
      if (currentCount > lastCount) {
        // Add celebration animation
        countElement.classList.add("celebrate");
        countElement.style.color = '#58cc02';
        
        // Play a sound effect like Duolingo
        const audio = new Audio("https://d35aaqx5ub95lt.cloudfront.net/sounds/correct-answer.mp3");
        audio.volume = 0.5;
        audio.play().catch(e => console.log("Audio play prevented:", e));
        
        // Remove the class after animation completes
        setTimeout(() => {
          countElement.classList.remove("celebrate");
          countElement.style.color = '';
        }, 500);
      }
      lastCount = currentCount;
    }
    
    // Check for count changes periodically
    setInterval(checkCountChange, 500);
    
    // Add Duolingo mascot
    const parentWebcamBox = document.getElementById('parentWebcamBox');
    if (parentWebcamBox) {
      // Check if mascot already exists
      if (!document.getElementById('duolingo-mascot')) {
        const mascot = document.createElement('div');
        mascot.id = 'duolingo-mascot';
        mascot.className = 'duolingo-mascot';
        parentWebcamBox.appendChild(mascot);
      }
    }
  });
