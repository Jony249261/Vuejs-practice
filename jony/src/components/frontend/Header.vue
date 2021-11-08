<template>
    <header class="header_area">
		<div class="main_menu">
			<nav class="navbar navbar-expand-lg navbar-light">
				<div class="container">
					<!-- Brand and toggle get grouped for better mobile display -->
					<a class="navbar-brand logo_h" href="index.html"><img src="/frontend/img/logo.png" alt=""></a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul class="nav navbar-nav menu_nav justify-content-end">
							<li class="nav-item active"><router-link class="nav-link" :to="{name: 'Home' }">Home</router-link ></li>
							<li class="nav-item"><router-link class="nav-link" :to="{name: 'about' }">About</router-link></li>
							<li class="nav-item"><router-link class="nav-link" :to="{name: 'service' }">Services</router-link></li>
							<li class="nav-item"><router-link class="nav-link" :to="{name: 'portfolio' }">Portfolio</router-link></li>
							<li class="nav-item submenu dropdown">
								<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Pages</a>
								<ul class="dropdown-menu">
									<li class="nav-item"><router-link class="nav-link" :to="{name: 'elements' }">Elements</router-link></li>
									<li class="nav-item"><a class="nav-link" href="portfolio-details.html">Portfolio Details</a></li>
								</ul>
							</li>
							<li class="nav-item submenu dropdown">
								<router-link :to="{name: 'blog' }" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false">Blog</router-link>
								<ul class="dropdown-menu">
									<li class="nav-item"><router-link class="nav-link" :to="{name: 'blog' }">Blog</router-link></li>
									<li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
								</ul>
							</li>
							<li class="nav-item"><router-link class="nav-link" :to="{name: 'contact' }">Contact</router-link></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>


export default {
  name: 'Header',
  
}
</script>