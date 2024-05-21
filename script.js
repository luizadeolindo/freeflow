document.addEventListener('DOMContentLoaded', function () {
  const contentDiv = document.getElementById('content');

  loadContent('dashboard.html');

  document
    .getElementById('dashboardLink')
    .addEventListener('click', function (event) {
      event.preventDefault();
      loadContent('dashboard.html');
    });

  document
    .getElementById('cameraLink')
    .addEventListener('click', function (event) {
      event.preventDefault();
      loadContent('camera.html');
    });

  function loadContent(page) {
    fetch(page)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then((data) => {
        contentDiv.innerHTML = data;
      })
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
        contentDiv.innerHTML =
          '<p>Sorry, there was an error loading the content.</p>';
      });
  }
});
