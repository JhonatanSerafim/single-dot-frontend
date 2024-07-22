// /js/components.js
document.addEventListener("DOMContentLoaded", () => {
  function loadComponent(elementId, componentUrl) {
    fetch(componentUrl)
      .then(response => {
        if (!response.ok) {
          return Promise.reject(new Error(`Failed to load component: ${response.statusText}`));
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => {
        console.error(error.message);
      });
  }
  
  loadComponent('footer', '/components/footer.html');
});
