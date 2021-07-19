const myChgMenu = () => {
    document.getElementById("chgButton").addEventListener('click', (e) => {   
        var main_courses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"]
        var techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"]
        var sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"]
        var seasonings = ["au yuzu rouge", "au poivre vert de Sichuan", "et une pointe de safran", "à l'ail noir", "et un peu de sucre en poudre"]
        
        var random_main_course = main_courses[Math.floor(Math.random()*main_courses.length)]
        var random_technique = techniques[Math.floor(Math.random()*techniques.length)]
        var random_side = sides[Math.floor(Math.random()*sides.length)]
        var random_seasoning = seasonings[Math.floor(Math.random()*seasonings.length)]
        
        var menu = `${random_main_course} ${random_technique}, avec ${random_side} ${random_seasoning}`
    document.getElementById('fixMenu').innerHTML = menu;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    myChgMenu(); 
    closePopup();
});

function onMouseOut(event) {
    // If the mouse is near the top of the window, show the popup
    if (event.clientY < 50) {
      // Remove this event listener
      document.removeEventListener("mouseout", onMouseOut);
  
      // Show the popup
      document.getElementById("popup").style.display = "block";
    }
};
  
  document.addEventListener("mouseout", onMouseOut);

function closePopup() {
    document.getElementById("popup").style.display = "none";
};

document.getElementById("exitbtn").addEventListener("click", closePopup);

//bouton avec event listener onlick "changer le menu"