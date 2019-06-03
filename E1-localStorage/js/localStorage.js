// localStorage.js
/* Later we will be using Classes and loading student data from external data file */

function saveData() {
  let gname1 = document.getElementById("gname1").value;
  localStorage.setItem("gname1", gname1);
  let gid1 = document.getElementById('gid1').value;
  localStorage.setItem('gid1', gid1);
  let gfa1 = document.getElementById('food1').value;
  localStorage.setItem('food1', gfa1);
  let gtip1 = document.getElementById('tip1').value;
  localStorage.setItem('tip1', gtip1);
  let discount1 = document.getElementById('discount1').value;
  localStorage.setItem('discount1', discount1);

  let gname2 = document.getElementById("gname2").value;
  localStorage.setItem("gname2", gname2);
  let gid2 = document.getElementById('gid2').value;
  localStorage.setItem('gid2', gid2);
  let gfa2 = document.getElementById('food2').value;
  localStorage.setItem('food2', gfa2);
  let gtip2 = document.getElementById('tip2').value;
  localStorage.setItem('tip2', gtip2);
  let discount2 = document.getElementById('discount2').value;
  localStorage.setItem('discount2', discount2);
  
  document.getElementById('select').innerHTML="<optgroup label='Use down arrow to select a guest'><option></option></optgroup>";
  document.getElementById('select').innerHTML += "<option>" + document.getElementById('gid1').value + "</option>";
  document.getElementById('select').innerHTML += "<option>" + document.getElementById('gid2').value + "</option>";
}

function makeReport() {
  let id = document.getElementById('select').value;
  for (var key in localStorage) {
    if (localStorage.getItem(key) == id) {
      document.getElementById('outid').value = localStorage.getItem(key);
      if (key == 'gid1') {
        document.getElementById('outname').value = localStorage.getItem('gname1');
        document.getElementById('outamount').value = (parseFloat(document.getElementById('food1').value) * 1.13 + parseFloat(document.getElementById('tip1').value) - parseFloat(document.getElementById('discount1').value)).toFixed(2);
      } else {
        document.getElementById('outname').value = localStorage.getItem('gname2');
        document.getElementById('outamount').value = (parseFloat(document.getElementById('food2').value) * 1.13 + parseFloat(document.getElementById('tip2').value) - parseFloat(document.getElementById('discount2').value)).toFixed(2);
      }
    }
  }
}