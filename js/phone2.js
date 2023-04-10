$(document).ready(function() {
  function addCountryToSelect(country, code, mask, placeholder) {
    var select = $('select[name="country"]');
    var option = $('<option>', { value: code, text: country });
    option.data('mask', mask);
    option.data('placeholder', placeholder);
    select.append(option);
  }

  // Load settings from settings.js
  for (var i = 0; i < settings.length; i++) {
    var country = settings[i].country;
    var code = settings[i].code;
    var mask = settings[i].mask;
    var placeholder = settings[i].placeholder;
    addCountryToSelect(country, code, mask, placeholder);
  }

  $('select[name="country"]').change(function() {
    var mask = $('option:selected', this).data('mask');
    var placeholder = $('option:selected', this).data('placeholder');
    $('.phone').inputmask(mask);
    $('.phone').attr('placeholder', placeholder);
  });

  $('select[name="country"]').trigger('change');

  $('.phone').on('keydown', function(e) {
    // Разрешаем ввод цифр, знака плюс, скобок, пробела и дефиса
    if (!/^\d|\+|\(|\)|\s|\-$/i.test(e.key)) {
      e.preventDefault();
      return;
    }

    // Получаем текущее значение и маску
    var value = $(this).val();
    var mask = $(this).inputmask('unmaskedvalue');

    // Добавляем символы из маски
    if (value.length < mask.length) {
      var char = mask.charAt(value.length);
      if (/^\d$/i.test(char)) {
        $(this).val(value + char);
      } else {
        $(this).val(value + char + mask.substring(value.length + 1).replace(/\d/gi, '_'));
      }
    }
  });

  // Detect IP for select (fot select option)
$.getJSON('//ipapi.co/json/', function(data) {
var countryCode = data.country_code;
var option = $('select[name="country"] option[value="' + countryCode + '"]');
if (option.length) {
option.prop('selected', true).trigger('change');
}
});
});


$(document).ready(function() {
  $('input[name="name"], input[name="phone"]').prop('required', true);
});





  
document.addEventListener("DOMContentLoaded", function() {

  // Обработчики отправки форм
  const forms = document.querySelectorAll("form");
  forms.forEach(function(form) {
    const phoneInput = form.querySelector(".phone");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const phone = phoneInput.value;
      if (phone) {
        showConfirmation(phone, form);
      }
    });
  });

  // Функция для отображения всплывающего окна
  function showConfirmation(phone, form) {
    const popup = document.getElementById("popup");
    const phoneConfirmation = document.getElementById("phone-confirmation");
    const phoneWithoutUnderscores = phone.replace(/_/g, '');
    phoneConfirmation.textContent = phoneWithoutUnderscores;
    popup.style.display = "block";

    // Обработчики для кнопок подтверждения/отмены
    const confirmYes = document.getElementById("confirm-yes");
    const confirmNo = document.getElementById("confirm-no");

    confirmYes.addEventListener("click", function() {
      popup.style.display = "none";
      form.submit();
    });

    confirmNo.addEventListener("click", function() {
      popup.style.display = "none";
    });
  }

  // Обработчик открытия модального окна
  const form = document.querySelector(".e-comebacker");
  const phoneInput = form.querySelector(".phone");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const phone = phoneInput.value;
    if (phone) {
      showConfirmation(phone, form);
    }
  });

});

