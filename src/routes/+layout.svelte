<svelte:head>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
</svelte:head>

<script>
	import Header from "$lib/Header.svelte"
	import Contacts from '$lib/Contacts.svelte';
</script>

<div class="app">
	<Header />
    <main>
        <slot />
    </main>
    <Contacts/>
</div>

<style>
    .app {
        margin-left: 3%;
        margin-right: 5%;
    }

</style>
