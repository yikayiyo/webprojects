const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkEmail(input) {
  if (input.value !== "") {
    if (isValidEmail(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, "邮箱格式不符合要求.");
    }
  }
}

function checkRequired(input) {
  if (input.value === "") {
    showError(input, `${getFieldName(input)} is required.`);
  } else {
    showSuccess(input);
  }
}

function checkLength(input, min, max) {
  if (input.value !== "") {
    if (input.value.length >= min && input.value.length <= max) {
      showSuccess(input);
    } else {
      showError(
        input,
        `${getFieldName(input)}'s length should be between ${min} and ${max}`
      );
    }
  }
}

function checkPasswordEqual(input1, input2) {
  if (input1.value !== input2.value) {
    console.log(input1.value);
    console.log(input2.value);
    showError(input2, "Password not match！");
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

/*Not clean */
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (username.value === "") {
//     showError(username, "Username is required");
//   } else {
//     showSuccess(username);
//   }

//   if (email.value === "") {
//     showError(email, "Email is required");
//   } else if (!isValidEmail(email.value)) {
//     showError(email, "Email is not valid");
//   } else {
//     showSuccess(email);
//   }

//   if (password.value === "") {
//     showError(password, "Password is required");
//   } else {
//     showSuccess(password);
//   }

//   if (password2.value === "") {
//     showError(password2, "Password2 is required");
//   } else if (password2.value !== password.value) {
//     showError(password2, "密码不匹配，请重新输入！");
//     password2.value = "";
//   } else {
//     showSuccess(password2);
//   }
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  [username, email, password, password2].map(checkRequired);
  checkLength(username, 8, 20);
  checkLength(password, 6, 25);
  checkLength(password2, 6, 25);
  checkEmail(email);
  checkPasswordEqual(password, password2);
});
