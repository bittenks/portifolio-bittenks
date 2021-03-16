<div class="toggle" >
<input type="checkbox" class="checkbox" id="chk" />
<label class="label" for="chk">
  <i class="fas fa-moon"></i>
  <i class="fas fa-sun"></i>
  <div class="ball"></div>
</label>
</div>


<script>
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
document.body.classList.toggle('dark-mode');
document.getElementById('container1').className ="w3-black w3-text-white w3-card-4";
document.getElementById('container2').className ="w3-container w3-card w3-black w3-margin-bottom";
document.getElementById('container3').className ="w3-container w3-text-white w3-card w3-black w3-margin-bottom";
document.getElementById('title1').className ="w3-text-white w3-padding-16";




});




</script>

