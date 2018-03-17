<template>

<body data-spy="scroll" data-target=".navbar" data-offset="50">
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>                        
      </button>
    </div>
    
    <div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul>
          <li><a href="#first" class="Photography">Photography</a></li>
          <li><a href="#second" class="About">About</a></li>
          <li><a href="#third" class="Contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>    

<div id="first" class="container-fluid">
 <img src="/../../../../public/img/1.jpeg" style="width:1000px;">
</div>
<div id="second" class="container-fluid">
  <h1>Section 2</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
<div id="third" class="container-fluid">
  <h1>Section 3</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
</body>

</template>
<style>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
    position: fixed;
    top: 0;
    width: 100%;
}

li {
    float: left;
}

li a {
    display: inline-block;
    color: #ef7b85;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    text-decoration-color:  black;
    background-color: transparent;
}

li logo{
    color: yellow;
}

.active {
    background-color: transparent;
}
body {
      position: relative; 
}
#first {
    padding-top:50px;
    width: 100%;
    height: 800px;
    color: #fff;
    background-color: #160f31;
}
#second {
    padding-top:50px;
    width: 100%;
    height: 800px;
    color: #fff; 
    background-color: #271b58;
}
#third {
    padding-top:50px;
    width: 100%;
    height: 800px;
    color: #fff; 
    background-color: #160f31;
}
p.S{
    color: yellow;
    font-family: sans-serif;
    font-size: 35px;
}

</style>
<script type="text/javascript" src="../../../../../public/js/vendor/jquery.js"></script>
<script>
$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".second").offset().top},
        'slow');
});
</script>
