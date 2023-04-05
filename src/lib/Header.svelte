<script lang='ts'>
    import {base} from "$app/paths"

    let name: string = "Aibek";
    let surname: string = "Bakirov";
</script>


<header>
    <nav>
        <li id="logoPerson">{name} <span>{surname}</span></li>
        <li> <a href="{base}/">About me</a></li>
        <li> <a href="{base}/projects">Projects</a></li>
        <li> <a href="{base}/comicImage">Comic</a></li>
    </nav>
</header>


<style>
    nav {
        display: flex;
        width: 70%;
        margin: auto;
        padding: 10px;
        align-items: center;
        justify-content: space-between;
        text-decoration: none;
        margin-left: 8%;
    }
    
    nav li {
        font-size: 27px;
        text-decoration: none;
        font-weight: bold;
        list-style: none;
        margin: 10px 40px;
        padding: 10px;
    }

    #logoPerson {
        text-decoration: none;
        font-family:'Brush Script MT', cursive;
        font-size: 35px;
        color: black;
        font-weight: bold;
    }

    a:visited {
        color: teal;
        text-decoration: none;
    }

    a:hover {
        color: blueviolet;
    }

    span {
        color: teal;
        font-family: 'Brush Script MT', cursive;
    }

    *{
        font-family: sans-serif;
    }
</style>