function copyEmail() {
    var email = document.querySelector('.contact p:first-child');
    var range = document.createRange();
    range.selectNodeContents(email);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Email address copied to clipboard!');
  }
