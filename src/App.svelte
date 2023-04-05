

<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My personal webpage</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
</svelte:head>

<script lang="ts">
    import Projects from "./lib/projects.svelte";
    import Contacts from "./lib/Contacts.svelte";
    import GetComic from "./lib/getComic.svelte";

    let name: string = "Aibek";
    let surname: string = "Bakirov";
</script>


<div class="header-footer">
    <nav>
        <div id="logoPerson">{name} <span>{surname}</span></div>
        <ul class="logoPerson">
            <li><a href="#aboutme">ABOUT ME</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contacts">CONTACTS</a></li>
        </ul>
    </nav>
</div>


<div class="main-part">
    <div class="window" id="aboutme">

        <div class="item">
            <h1>About me</h1>
            <p>Welcome to my personal webpage! My name is <span>{name}</span> and this website serves as a platform to showcase my work and interests.  
                Here you will find information about me, my projects, and how to get in touch. I hope you enjoy exploring my site and learning more about me. Thank you for visiting!</p>
        </div>
        <ul class="container"> 
            <li class="item">
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
            </li>

            <li class="item">
                <h2>Comic Image</h2>
                <GetComic />
            </li>
        </ul>
    </div>


    <Projects />
</div>

<Contacts />

