import { useState } from "react";
import SelectComponent, { type SelectOption } from "./SelectComponent";

const OPTIONS = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

function App() {
  const [singleValue, setSingleValue] = useState<SelectOption | undefined>(
    OPTIONS[0]
  );
  const [multipleValue, setMultipleValue] = useState<SelectOption[]>(
    [OPTIONS[0]]
  );
  return (
    <>
      <SelectComponent
        options={OPTIONS}
        value={singleValue}
        onChange={(o) => setSingleValue(o)}
      />
      <br />
      <SelectComponent
        multiple={true}
        options={OPTIONS}
        value={multipleValue}
        onChange={(o) => setMultipleValue(o)}
      />
    </>
  );
}

export default App;
