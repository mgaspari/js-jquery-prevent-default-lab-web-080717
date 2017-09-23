$(document).ready(function(){
  // call functions here
  submitForm()
});

// define functions here
var submitForm = () => {
  $('form').on('submit', (e) => {
    e.preventDefault()
    let a = $('#item').val()
    $('#list ol').append(`<li>${a}</li>`)

  })
}
