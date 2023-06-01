$(function () {
  $('input[name="changeFontSizeRadio"]').on('change', function () {
    selectedValue = $('input[name="changeFontSizeRadio"]:checked').val();
    console.log(selectedValue);
    $('html').css({ 'font-size': selectedValue });
  });
});
