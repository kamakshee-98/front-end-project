let header = document.querySelector('.header');
header.innerHTML=` <nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    <div class="col-sm-12 col-md-4">
        <!--LOGO of the project-->
        <img src="../images/logo.png" width="60px" height="60px">
        
    </div>
    <!--Button icon-->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="col-sm-12 col-lg-8 col-md-4 justify-content-center" >
            <!--Used Form for Search bar and search button-->
            <form class="d-flex" role="search">
                <input class="form-control " type="search" placeholder="Search" aria-label="Search" style="width: 400px;">
                <button class="btn btn-warning" type="submit">
                    <a href="#"><i class="fa-solid fa-magnifying-glass-location"></i></a>
                </button>
              </form>
        </div>  
        <div class="col-sm-12 col-md-4 d-flex justify-content-end" style="margin-right:20px">
            <!--Login button and linked with "login.html"-->
            <button type="submit" class="btn btn-warning border border-dark" style="border-radius: 6px; width: 90px;">
              <a href="login.html" style="text-decoration: none;color: black; font-style: italic;">Login</a></button>
            <!--Cart button and linked with "cart.html"-->
            <button type="button" class="btn btn-warning border border-dark">
              <a href="cart.html"><i class="fa-solid fa-cart-shopping"></i></a>
            </button>
        </div>
    </div>
  </div>
</nav>
<!--Navigation-->
<div class="row1">
<div class="col-lg-12 col-sm-10 d-flex justify-content-center">
    <ul class="nav" style="margin-right: 60px;">
        <!--Home-->
        <li class="nav-item">
            <a class="nav-link" href="home.html">Home</a>
        </li>
        <!--All Products-->
        <li class="nav-item">
            <a class="nav-link" href="allproducts.html">All Products</a>
        </li>
        <!--Dropdown menu for Women-->
        <li class="nav-item dropdown" style="margin-top: 8px; margin-left:15px">
            <a class="nav-item dropdown-toggle" data-bs-toggle="dropdown" style="text-decoration: none;">Women</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="allwomen.html">All</a></li>                
                <li><a class="dropdown-item" href="womendress.html">Dresses</a></li>
                <li><a class="dropdown-item" href="womenpants.html">Pants</a></li>
                <li><a class="dropdown-item" href="womenskirt.html">Skirts</a></li>
            </ul>
        </li>
        <!--Dropdown menu for Men-->
        <li class="nav-item dropdown" style="margin-top: 8px; margin-left: 35px;">
            <a class="nav-item dropdown-toggle" data-bs-toggle="dropdown" style="text-decoration: none;">Men</a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="allmen.html">All</a></li>
                <li><a class="dropdown-item" href="menshirt.html">Shirts</a></li>
                <li><a class="dropdown-item" href="menpant.html">Pants</a></li>
                <li><a class="dropdown-item" href="menhoodle.html">Hoodles</a></li>
            </ul>
        </li>
        <!--kids-->
        <li class="nav-item" style="margin-left:30px;">
            <a class="nav-link" href="kids.html">Kids</a>
        </li>
        <!--contact-->
        <li class="nav-item" style="margin-left:30px;">
            <a class="nav-link" href="contact.html">Contact</a>
        </li>
        
    </ul>
</div>
</div>`