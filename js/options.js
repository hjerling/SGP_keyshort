// Validate password length.
var validatePasswordLength = function (passwordLength) {

  // Password length must be an integer.
  passwordLength = parseInt(passwordLength, 10) || 10;

  // Return a password length in the valid range.
  return Math.max(4, Math.min(passwordLength, 24));

};

// Adjust password length.
var adjustPasswordLength = function (event) {

  // Get length increment.
  var increment = ( $(this).attr('id') == 'Up' ) ? 1 : -1;

  // Calculate new password length.
  var passwordLength = validatePasswordLength($("#Len").val());
  var newPasswordLength = validatePasswordLength(passwordLength + increment);

  // Update form with new password length.
  $("#Len").val(newPasswordLength).trigger('change');
  // Prevent event default action.
   event.preventDefault();

};

// Saves options to chrome.storage
function save_options() {
  var passLength = $('#Len').val() || 10;
  var secretPassword = $('#Secret').val() || "";
  var hashMethod = $('input:radio[name=Method]:checked').val() || 'md5'; 
  chrome.storage.sync.set({
    secretPassword: secretPassword,
    passwordLength: passLength,
    hashMethod: hashMethod
  }, function() {
    // Update status to let user know options were saved.
    var saveButton = $("#Save")
    saveButton.text("Options saved");
    setTimeout(function() {
      saveButton.text("Save");
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    secretPassword: 'sPassword',
    passwordLength: 'passwordLength',
    hashMethod: 'hashMethod'
  }, function(items) {
    console.log(items);
    $('#Secret').val(items.secretPassword);
    $("#Len").val(items.passwordLength);
    $('input:radio[value=' + items.hashMethod + ']').prop('checked', true);
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('Save').addEventListener('click',
    save_options);

$('#Up, #Down').on('click', adjustPasswordLength);