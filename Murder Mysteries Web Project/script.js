window.onload = function () {
  // dropdown menu functions
  const menu = document.querySelector(".menuBox");
  const menu_Dropper = document.querySelector(".products");
  menu_Dropper.addEventListener("mouseover", function () {
    menu.style.display = "flex";
  });
  menu.addEventListener("mouseleave", function () {
    menu.style.display = "none";
  });

  // login popup functions
  const login_button = document.getElementById("login");
  const login_popup_box = document.querySelector(".popuplogin");
  const close_popup = document.querySelector(".fa-close");
  const overlay = document.querySelector(".overlay");
  login_button.addEventListener("click", function () {
    login_popup_box.classList.add("active");
    overlay.classList.add("active");
  });
  close_popup.addEventListener("click", function () {
    login_popup_box.classList.remove("active");
    overlay.classList.remove("active");
  });

  //Sign Up pop up functions
  const signup_button = document.getElementById("singup");
  const signup_popup_box = document.querySelector(".popupSignup");
  const close_signup = document.getElementById("closeSignup");
  signup_button.addEventListener("click", function () {
    signup_popup_box.classList.add("active");
    overlay.classList.add("active");
  });
  close_signup.addEventListener("click", function () {
    signup_popup_box.classList.remove("active");
    overlay.classList.remove("active");
  });

  // darkmode function
  const DarkMode = document.querySelector(".darkmodeSwitch");
  const navbar = document.querySelector(".navbar");
  DarkMode.addEventListener("click", function () {
    DarkMode.classList.toggle("active");
    document.body.classList.toggle("dark");
    navbar.classList.toggle("night");
  });

  //Login Form functions
  const Login_Phone_Number = document.querySelector(".phoneNumber_Login");
  const Login_Form = document.getElementById("Login_Form");
  const LoginAlert = document.querySelector(".login_message");
  Login_Form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkLoginInputs();
  });
  function checkLoginInputs() {
    const Login_Phone_Number_Value = Login_Phone_Number.value.trim();
    const Login_and_SignupBUTTON = document.getElementById("leftNav");
    const Welcome = document.querySelector(".WelcomeMessage");
    if (Login_Phone_Number_Value === "") {
      Login_Phone_Number.classList.add("wrong");
      LoginAlert.style.display = "flex";
      LoginAlert.innerHTML = `لطفا این کادر را پر کنید!`;
    } else if (Login_Phone_Number_Value.length !== 11) {
      Login_Phone_Number.classList.add("wrong");
      LoginAlert.style.display = "flex";
      LoginAlert.innerHTML = `شماره همراه باید 11 رقم باشد!`;
    } else {
      LoginAlert.style.display = "none";
      Login_Phone_Number.classList.remove("wrong");
      Welcome.style.display = "flex";
      setTimeout(function () {
        login_popup_box.classList.remove("active");
        overlay.classList.remove("active");
        Login_and_SignupBUTTON.innerHTML = `
        <div>
          <a href="#" id="userPanel">پنل کاربری</a>
        </div>`;
      }, 1000);
    }
  }

  //signup form submission
  const Signup_form = document.getElementById("signUp");
  Signup_form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkInputs();
  });
  const fullname = document.querySelector(".name");
  const phone_number = document.querySelector(".phone");
  const nameAlert = document.querySelector(".name_message");
  const phoneAlert = document.querySelector(".phone_message");
  const name_checkmark = document.querySelector(".nameCheckmark");
  const phone_checkmark = document.querySelector(".phoneCheckmark");
  function checkInputs() {
    const fullnameValue = fullname.value.trim();
    const phonenumberValue = phone_number.value.trim();
    if (fullnameValue === "") {
      nameAlert.innerHTML = `لطفا این کادر را پر کنید!`;
      nameAlert.style.display = "flex";
      fullname.classList.add("wrong");
    } else if (/\d/.test(fullnameValue) === true) {
      nameAlert.innerHTML = `نام و نام خانوادگی نباید شامل عدد باشد`;
      nameAlert.style.display = "flex";
      fullname.classList.add("wrong");
    } else {
      nameAlert.style.display = "none";
      fullname.classList.remove("wrong");
      name_checkmark.style.visibility = "visible";
    }
    if (phonenumberValue === "") {
      phoneAlert.innerHTML = `لطفا این کادر را پر کنید!`;
      phoneAlert.style.display = "flex";
      phone_number.classList.add("wrong");
    } else if (phonenumberValue.length !== 11) {
      phoneAlert.innerHTML = `شماره همراه باید 13 رقم باشد!`;
      phoneAlert.style.display = "flex";
      phone_number.classList.add("wrong");
    } else {
      phoneAlert.style.display = "none";
      phone_number.classList.remove("wrong");
      phone_checkmark.style.visibility = "visible";
    }
  }

  //phone input countries and stuff
  const phoneInputField = document.querySelector(".phone");
  const phoneInputLogin = document.querySelector(".phoneNumber_Login");
  const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
  // const phoneInput_Login = window.intlTelInput(phoneInputLogin, {
  //   utilsScript:
  //     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  // });

  //Hamburger Menu
  const hamburgerbtn = document.getElementById("HamburgerMenu");
  const Responsive_Navbar = document.querySelector(".ResponsiveNav");
  hamburgerbtn.innerText = "☰";
  hamburgerbtn.addEventListener("click", function () {
    overlay.classList.toggle("active");
    navbar.classList.toggle("active");
    hamburgerbtn.classList.toggle("active");
    Responsive_Navbar.classList.toggle("active");
  });

  //Sticky Navbar
  window.addEventListener("scroll", function () {
    if (window.scrollY >= navbar.offsetHeight) {
      navbar.style.position = "fixed";
      navbar.style.background = "var(--primaryDay)";
      navbar.style.top = "0";
      menu.style.top = "100%";
      hamburgerbtn.style.top = "13px";
      hamburgerbtn.style.zIndex = "2000";
    } else {
      navbar.style.position = "relative";
      navbar.style.background = "transparent";
    }
  });

  //Count Down Functions
  const PublishDate_for_Case1 = "15 Oct 2023";
  const PublishDate_for_Case2 = "28 Sep 2023";
  const PublishDate_for_Case3 = "29 Nov 2023";
  const Case1_Date__days = document.querySelector(".daysC1");
  const Case1_Date__hours = document.querySelector(".hoursC1");
  const Case1_Date__minutes = document.querySelector(".minutesC1");
  const Case1_Date__seconds = document.querySelector(".secondsC1");
  const Case2_Date__days = document.querySelector(".daysC2");
  const Case2_Date__hours = document.querySelector(".hoursC2");
  const Case2_Date__minutes = document.querySelector(".minutesC2");
  const Case2_Date__seconds = document.querySelector(".secondsC2");
  const Case3_Date__days = document.querySelector(".daysC3");
  const Case3_Date__hours = document.querySelector(".hoursC3");
  const Case3_Date__minutes = document.querySelector(".minutesC3");
  const Case3_Date__seconds = document.querySelector(".secondsC3");
  countDownC1();
  countDownC2();
  countDownC3();
  function countDownC1() {
    const Case1_publishDate = new Date(PublishDate_for_Case1);
    const current_Date = new Date();
    let total_Time_Left = (Case1_publishDate - current_Date) / 1000;
    let days = Math.floor(total_Time_Left / 3600 / 24);
    let hours = Math.floor(total_Time_Left / 3600) % 24;
    let minutes = Math.floor(total_Time_Left / 60) % 60;
    let seconds = Math.floor(total_Time_Left % 60);
    Case1_Date__days.innerText = days;
    Case1_Date__hours.innerText = hours;
    Case1_Date__minutes.innerText = minutes;
    Case1_Date__seconds.innerText = seconds;
  }
  function countDownC2() {
    const Case1_publishDate = new Date(PublishDate_for_Case2);
    const current_Date = new Date();
    let total_Time_Left = (Case1_publishDate - current_Date) / 1000;
    let days = Math.floor(total_Time_Left / 3600 / 24);
    let hours = Math.floor(total_Time_Left / 3600) % 24;
    let minutes = Math.floor(total_Time_Left / 60) % 60;
    let seconds = Math.floor(total_Time_Left % 60);
    Case2_Date__days.innerText = days;
    Case2_Date__hours.innerText = hours;
    Case2_Date__minutes.innerText = minutes;
    Case2_Date__seconds.innerText = seconds;
  }
  function countDownC3() {
    const Case1_publishDate = new Date(PublishDate_for_Case3);
    const current_Date = new Date();
    let total_Time_Left = (Case1_publishDate - current_Date) / 1000;
    let days = Math.floor(total_Time_Left / 3600 / 24);
    let hours = Math.floor(total_Time_Left / 3600) % 24;
    let minutes = Math.floor(total_Time_Left / 60) % 60;
    let seconds = Math.floor(total_Time_Left % 60);
    Case3_Date__days.innerText = days;
    Case3_Date__hours.innerText = hours;
    Case3_Date__minutes.innerText = minutes;
    Case3_Date__seconds.innerText = seconds;
  }
  setInterval(countDownC1, 1000);
  setInterval(countDownC2, 1000);
  setInterval(countDownC3, 1000);

  //Carousel
  // const container = document.getElementById("imgs");
  // const images = document.querySelectorAll("#imgs img");
  // const left = document.getElementById("leftB");
  // const right = document.getElementById("rightB");
  // let index = 0;
  // let transformDiff;
  // let imageSize = 278;
  // left.addEventListener("click", function () {
  //   index++;
  //   if (index > images.length - 5) {
  //     index = 0;
  //   }
  //   container.style.transform = `translateX(${-index * imageSize}px)`;
  //   transformDiff = -index * imageSize;
  // });
  // right.addEventListener("click", function () {
  //   if (index === 0) {
  //     index = images.length - 5;
  //     transformDiff = -index * imageSize;
  //     container.style.transform = `translateX(${transformDiff}px)`;
  //   } else {
  //     index--;
  //     container.style.transform = `translateX(${transformDiff + imageSize}px)`;
  //     transformDiff = transformDiff + imageSize;
  //   }
  // });
};
