
let moon = document.querySelector(".moons");
let moonMobile = document.querySelector(".moonMobile");
let txtcontent = document.querySelector(".txt-content");
let shopp = document.querySelector(".shopp");
let childShop = document.querySelector(".childShop");
let arrows = document.querySelector("#arrows");
let isdark = document.documentElement;
let elem = document.querySelector(".elem");
let darkbg = document.querySelector(".darkbg");
let hamburgorMenu = document.querySelector(".hamburgor_menu");
let hamburgorMenu2 = document.querySelector(".hamburgor_menu2");
let basket = document.querySelector("#basket");
let basket2 = document.querySelector("#basket2");
let closebtn = document.querySelector("#closebtn");
let closebtnleft = document.querySelector("#closebtnleft");
let shopBtn = document.querySelector("#shopBtn");
let menuBurgor = document.querySelector("#menuburgor");
let overlays = document.querySelector(".overlays");
let a = true;
moon.addEventListener("click", () => {
    if (isdark.classList == "") {
      isdark.classList.add("dark");
      localStorage.setItem("theme", "dark");
      moon.innerHTML = "";
      moon.insertAdjacentHTML(
        "beforeend",
        `
                <use class="elem" href="#sun"></use>
          `
      );
      if (txtcontent) {
        txtcontent.innerHTML = "تم روشن";
        moonMobile.innerHTML = "";
        moonMobile.insertAdjacentHTML(
          "beforeend",
          `
              <use href="#sun"></use>
          `
        );
      }
      } else if (isdark.classList == "dark") {
      isdark.classList.remove("dark");
      localStorage.setItem("theme", "light");
      moon.innerHTML = "";
      moon.insertAdjacentHTML(
        "beforeend",
        `
              <use class="elem" href="#moonss"></use>
          `
      );
      if (txtcontent) {
        txtcontent.innerHTML = "تم تیره";
        moonMobile.innerHTML = "";
        moonMobile.insertAdjacentHTML(
          "beforeend",
          `
              <use href="#moonss"></use>
        `
        );
      }
    }
});
txtcontent.addEventListener("click", () => {
  if (isdark.classList == "") {
    isdark.classList.add("dark");
    localStorage.setItem("theme", "dark");
    moon.innerHTML = "";
    moon.insertAdjacentHTML(
      "beforeend",
      `
              <use class="elem" href="#sun"></use>
        `
    );
    if (txtcontent) {
      txtcontent.innerHTML = "تم روشن";
      moonMobile.innerHTML = "";
      moonMobile.insertAdjacentHTML(
        "beforeend",
        `
            <use href="#sun"></use>
        `
      );
    }
  } else if (isdark.classList == "dark") {
    isdark.classList.remove("dark");
    localStorage.setItem("theme", "light");
    moon.innerHTML = "";
    moon.insertAdjacentHTML(
      "beforeend",
      `
             <use class="elem" href="#moonss"></use>
        `
    );
    if (txtcontent) {
      txtcontent.innerHTML = "تم تیره";
      moonMobile.innerHTML = "";
      moonMobile.insertAdjacentHTML(
        "beforeend",
        `
            <use href="#moonss"></use>
       `
      );
    }
  }
});
const togglebtn = () => {
  shopp.addEventListener("click", () => {
    if (a) {
      childShop.style.cssText = "display:flex;flex-direction:column";
      arrows.style.transform = "rotate(180deg)";
      a = false;
    } else if (!a) {
      childShop.style.cssText = "display:none";
      arrows.style.transform = "rotate(0deg)";
      a = true;
    }
  });
};

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") != null) {
    if (localStorage.getItem("theme") == "dark") {
      isdark.classList.add("dark");
      moon.innerHTML = "";
      moon.insertAdjacentHTML(
        "beforeend",
        `
                 <use id="elem" href="#sun"></use>
            `
      );
      txtcontent.innerHTML = "تم روشن";
      moonMobile.insertAdjacentHTML(
        "beforeend",
        `
              <use href="#sun"></use>
        `
      );
    } else {
      isdark.classList.remove("dark");
      moon.innerHTML = "";
      moon.insertAdjacentHTML(
        "beforeend",
        `
                 <use id="elem" href="#moonss"></use>
            `
      );

      txtcontent.innerHTML = "تم تیره";
      moonMobile.insertAdjacentHTML(
        "beforeend",
        `
             <use href="#moonss"></use>
       `
      );
    }
  }
  togglebtn();
  overlay()
  closeBtn()
  menuBurgors()
  closeBtnLeft()
  shopBtns()

  // close btn menu mobile right side
   function closeBtn(){
    closebtn.addEventListener("click", () => {
      hamburgorMenu.classList.add("-right-72");
      hamburgorMenu.classList.remove("right-0");
      hamburgorMenu.classList.add("closed");
      hamburgorMenu.classList.remove("opened");
      darkbg.classList.add("hidden");
    });
  }
  // open btn menu right side
  function menuBurgors(){
    menuBurgor.addEventListener("click", () => {
      hamburgorMenu.classList.remove("-right-72");
      hamburgorMenu.classList.add("right-0");
      hamburgorMenu.classList.add("opened");
      hamburgorMenu.classList.remove("closed");
      darkbg.classList.remove("hidden");
    });
  }
  // close btn menu mobile left side
  function closeBtnLeft(){
    closebtnleft.addEventListener("click", () => {
      hamburgorMenu2.classList.add("-left-72");
      hamburgorMenu2.classList.remove("left-0");
      hamburgorMenu2.classList.add("closed");
      hamburgorMenu2.classList.remove("opened");
      darkbg.classList.add("hidden");
      console.log(shopBtn);
    });
  }
  // open btn menu left side
  function shopBtns(){
    shopBtn.addEventListener("click", () => {
      hamburgorMenu2.classList.remove("-left-72");
      hamburgorMenu2.classList.add("left-0");
      hamburgorMenu2.classList.add("opened");
      hamburgorMenu2.classList.remove("closed");
      darkbg.classList.remove("hidden");
    });
  }
  // overlaye close  all menu out of tag click
  function overlay(){
    overlays.addEventListener('click',()=>{
      hamburgorMenu.classList.add("-right-72");
      hamburgorMenu.classList.remove("right-0");
      hamburgorMenu.classList.add("closed");
      hamburgorMenu.classList.remove("opened");
      darkbg.classList.add("hidden");
      hamburgorMenu2.classList.add("-left-72");
      hamburgorMenu2.classList.remove("left-0");
      hamburgorMenu2.classList.add("closed");
      hamburgorMenu2.classList.remove("opened");
      darkbg.classList.add("hidden");
    })
  }

});