import { Select } from "./components/select"
import { useState } from "react"
function App () {
  const options = [
    {label: "First", value: 1},
    {label: "Second", value: 2},
    {label: "Third", value: 3},
    {label: "Forth", value: 4},
    {label: "Fifth", value: 5},
    {label: "Sixth", value: 6},
  ] 

  const [value, setValue] = useState<typeof options[0] | undefined >(options[0])
  return (
    
      <div>
        <h1>Home</h1>
        <Select options={options} value={value} onChange={(e=> setValue(e))}/>
      </div>
    
  )
}

export default App