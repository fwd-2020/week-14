var form = document.querySelector('#github-search');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.querySelector('#username').value;
  console.log("OMG form submitted! We will search for", username);
  fetch('https://api.github.com/users/' + username)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var info_list = document.querySelector('#results');
      info_list.querySelector('.username b').innerText = data.login;
      info_list.querySelector('.name b').innerText = data.name;
      info_list.querySelector('.photo img').src = data.avatar_url;
    });
  document.querySelector('#username').value = '';
});
