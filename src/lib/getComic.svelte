<!-- App.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import type { ComicData } from './types';

  let email: string = 'a.bakirov@innopolis.university';
  let comic: ComicData | null = null;

  const apiUrl: string = `https://fwd.innopolis.app/api/hw2?email=${email}`;

  async function getComic() {
    try {
      const response = await fetch(apiUrl);
      const number = await response.text();

      const params = new URLSearchParams({ num: number });
      const comicUrl = `https://getxkcd.vercel.app/api/comic?${params.toString()}`;

      const response2 = await fetch(comicUrl);
      const data: ComicData = await response2.json();

      comic = data;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  onMount(getComic);
</script>

<main>
  {#if comic}
    <img src={comic.img} alt={comic.alt} />
    <h2>{comic.title}</h2>
    <p>Uploaded on {new Date(comic.year, comic.month - 1, comic.day).toLocaleDateString()}</p>
  {:else}
    <p>An error occurred while retrieving the comic.</p>
  {/if}
</main>
