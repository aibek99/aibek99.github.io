import './app.css'
import App from './App.svelte'

type DocType = Element | ShadowRoot;

const app = new App({
  target: document.getElementById('app') as DocType,
})
export default app

