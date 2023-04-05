<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My personal webpage</title>
</svelte:head>

<script lang="ts">
    let name: string = "Aibek";
</script>

<div class="main-part">
    <div class="window" id="aboutme">

        <div class="item">
            <h1>About me</h1>
            <p>Welcome to my personal webpage! My name is <span>{name}</span> and this website serves as a platform to showcase my work and interests.  
                Here you will find information about me, my projects, and how to get in touch. I hope you enjoy exploring my site and learning more about me. Thank you for visiting!</p>
        </div>
		<h2>Facts about me</h2>
		<ul class="aboutme">
			<li class="item">3rd year student at Innopolis University</li>
			<li class="item">major is Software Development</li>
			<li class="item">love to solve algorithmic problems</li>
			<li class="item">love to play football</li>
			<li class="item">
				<a href="https://codeforces.com/profile/myway">
					Codeforces
				</a>
				account
			</li>
			<li class="item">
				<a href="https://leetcode.com/aba99/">
					Leetcode
				</a> 
				account
			</li>
		</ul>
    </div>
</div>


<style>
	.aboutme {
		display: flex;
		flex-direction: column;
	}

	.main-part {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.window {
		position: relative;
		width: 92%;
		height: 100vh;
		margin-top: 15%;    
	}

	a {
		text-decoration: none;
		color: teal;
		font-weight: bold;
	}

	a:visited {
		color: teal;
		text-decoration: none;
	}

	a:hover {
		color: blueviolet;
	}

	p {
		position: relative;
		width: 65%;
	}

	h2 {
		position: relative;
		width: 65%;
	}

	span {
		color: teal;
		font-family: 'Brush Script MT', cursive;
	}

	*{
		font-family: sans-serif;
	}

</style>

