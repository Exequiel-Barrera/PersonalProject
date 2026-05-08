function App() {
  const machines = [
    'Excavator (a)',
    'Loader (b)',
    'Dump Truck (c)',
  ]

  return (
    <div className="app">
      <h1>Heavy Machinery Pre-Start Inspection App</h1>

      <h2>Select Machine</h2>

      <ul>
        {machines.map((machine) => (
          <li key={machine}>{machine}</li>
        ))}
      </ul>
    </div>
  )
}

export default App