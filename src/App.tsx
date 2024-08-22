import solidLogo from './assets/solid.svg'
import './App.css'
import MovieList from './components/MovieList'
import { Counter } from './components/Counter'

function App() {

  return (
    <div class="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <Counter />
        <h3>Star Wars Movies</h3>
        <MovieList />
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
  )
}

export default App
