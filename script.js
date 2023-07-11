// script.js

function resetPassword() {
    var emailInput = document.getElementById("email").value;
    
    if (emailInput) {
      // Exibir o pop-up
      var popup = document.getElementById("popup");
      popup.style.display = "block";
    }
  }
  
  function closePopup() {
    // Fechar o pop-up
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  
  function redirectToLogin() {
    // Redirecionar para a página de login
    window.location.href = "index.html";
  }
  