function upDate(previewPic){
    
 document.getElementById("image").style.backgroundImage = "url("+ previewPic.src + ")";
 document.getElementById("image").innerHTML = '';
   
   }

function unDo(){
    
   document.getElementById("image").style.backgroundImage = "url(' ')";
   document.getElementById("image").innerHTML = 'Hover over an image show to show here';
   document.getElementById("image").style.backgroundImage = "url('https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile-656x369.png')";
 }




 