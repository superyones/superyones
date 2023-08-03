// ===============================================================JS AUTO SLIDER START===============================================================
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var slideList = document.getElementsByClassName("testi-slide");
  if (n > slideList.length) slideIndex = 1;
  console.log(n);
  if (n < 1) slideIndex = slideList.length;
  for (i = 0; i < slideList.length; i++) {
    slideList[i].style.display = "none";
  }
  slideList[slideIndex - 1].style.display = "flex";
}

setInterval(() => {
  plusDivs(1);
}, 3000);
// ===============================================================JS AUTO SLIDER END===============================================================
// ===============================================================JS FORM VALIDATION START===============================================================
function validateForm(){
    const fullname = document.forms.form1.fullname.value;
    const email = document.forms.form1.email.value;
    const pnumber = document.forms.form1.selectedIndex;

    if (fullname == ""){  
        alert("Name can't be blank");  
        return false; 
    } else if (email == ""){  
        alert("Email can't be blank");  
        return false;
    } else if (pnumber == ""){  
        alert("Phone Number can't be blank");  
        return false;
    } else if(document.form1.interest.selectedIndex==""){
        alert ( "Please choose your interest");
    return false;
    }
}
// ===============================================================JS FORM VALIDATION END===============================================================
