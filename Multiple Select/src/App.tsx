import SelectComponent from "./SelectComponent"

const OPTIONS = [
  { label: 'First', value: 1},
  { label: 'Second', value: 2},
  { label: 'Third', value: 3},
  { label: 'Fourth', value: 4},
  { label: 'Fifth', value: 5},
]

function App() {
  return (
    <>
      <SelectComponent options={OPTIONS}/>
    </>
  )
}

export default App
