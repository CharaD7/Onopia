// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(function($){ 
  $("form").bind('ajax:success', function(data, status, xhr) {
    if (status.state == 'success') {
      if (status.html) {
        $("#message").html(status.html);
      }
      if (status.redirect) {
        $(location).attr('href', status.redirect);
      }
    } else {
      $("#errors").html(status.html);
    }
  })
});

function showMessage(title, message) {
  $("#message").html(message)
  popUp("#message", title)
}

function popUp(id, title) {
  $(id).wijdialog({
    title: title,
    width: 400,
    autoOpen: true,
    modal: true,
    buttons: {
        Ok: function () {
            $(this).wijdialog("close");
        }
    },
    captionButtons: {
        pin: { visible: false },
        refresh: { visible: false },
        toggle: { visible: false },
        minimize: { visible: false },
        maximize: { visible: false }
    }
  });
}
