window.addEventListener('load', () => {
  document.querySelector('button.purchase').addEventListener('click', () => {
    gtag('event', 'click', {
      event_category: 'btn_event',
    })
  })
})

document.querySelector('').addEventListener('submit', () => {})

// contact form 7
document.querySelector('.wpcf7').addEventListener(
  'wpcf7submit',
  (e) => {
    gtag('event', 'form_submit', {
      form: 'success',
    })
  },
  false
)

document.addEventListener(
  'wpcf7submit',
  function (event) {
    gtag('event', 'form_submit', {
      form: 'success',
    })
  },
  false
)

// ninja form
jQuery(document).ready(function () {
  jQuery(document).on('nfFormSubmitResponse', function () {
    gtag('event', 'ninja form_submit', {
      ninja_form: 'success',
    })
  })
})

// using pure javascript syntax
document.querySelector('.wpcf7').addEventListener(
  'submit',
  (e) => {
    gtag('event', 'form_submit', {
      form: 'success',
    })
  },
  false
)

window.addEventListener('load', () => {
  document
    .querySelector('[value="Submit"]')
    .addEventListener('click', () => {
      gtag('event', 'submit clicked', {})
    })
})


window.Tawk_API = window.Tawk_API || {};
window.Tawk_API.onOfflineSubmit = function(data){
    gtag('event', 'chat box submit', {
      chat_box: 'submitted'
    })
};

window.Tawk_API = window.Tawk_API || {};
window.Tawk_API.onOfflineSubmit = function(data){
  dataLayer.push({'event': 'chat_box_data_layer'})
};