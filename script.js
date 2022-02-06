//scroll 
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 1800){
          $('.scroll-up-btn').addClass("show");
        } else{
          $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
    //owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false,
            },
            834:{
                items: 2,
                nav: false,
            },
            1172:{
                items: 3,
                nav: false,
            },
        }
    });
});

//navbar hover link
window.addEventListener("load", function(){
    const links = [...document.querySelectorAll(".menu-link")];
    links.forEach(item => item.addEventListener("mouseenter", handleHoverLink));
    const line = document.createElement("div");
    const menuLength = links.length;
    line.className = "line-effect";
    document.body.appendChild(line);

    function handleHoverLink(event){
        const { left, top, width, height } = event.target.getBoundingClientRect();
        const offsetBottom = 2;
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${top + height + offsetBottom}px`;
    }

    const menu = document.querySelector(".menu");
    menu.addEventListener("mouseleave", function () {
        line.style.width = 0;
    });

    // const btnbuy = document.querySelector("[data-btn]")
    // btnbuy.addEventListener("click", () => {
    //     btnbuy.classList.toggle("animating")
    // })
})

const popup = [...document.querySelectorAll('#shop-btn')];

popup.forEach(buy => buy.addEventListener("click", Clickpopup));

function Clickpopup(event){
    document.querySelector(".popup").classList.add("active");
}

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("active");
});

//product popup
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.close-btn').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

//information popup
let inforContainer = document.querySelector('.team-infor');
let inforBox = inforContainer.querySelectorAll('.information');

document.querySelectorAll('.card .box .button .aboutMe').forEach(infor =>{
  infor.onclick = () =>{
    inforContainer.style.display = 'flex';
    let name = infor.getAttribute('data-name');
    inforBox.forEach(showInfor =>{
      let target = showInfor.getAttribute('data-target');
      if(name == target){
        showInfor.classList.add('active');
      }
    });
  };
});

inforBox.forEach(close =>{
  close.querySelector('.close-btn').onclick = () =>{
    close.classList.remove('active');
    inforContainer.style.display = 'none';
  };
});

function show(anything){
    document.querySelector('.textbox').value = anything;
}

let dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    dropdown.classList.toggle('active');
}

window.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("my-form");
  var button = document.getElementById("my-form-button");

  function success() {
    form.reset();
    button.classList.toggle("animating")
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}
