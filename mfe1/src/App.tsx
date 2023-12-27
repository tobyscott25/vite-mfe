import CounterButton from "./components/CounterButton";

function App() {
  return (
    <div>
      <h1>Child app</h1>
      <p>PotterDB API URL: {import.meta.env.VITE_POTTERDB_API_URL}</p>
      <CounterButton />
    </div>
  );
}

export default App;
