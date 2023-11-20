import { useState } from "react";
import "./App.css";

function App() {
  const [tagValue, setTagValue] = useState("");
  const [tag, setTag] = useState([]);

  const addTag = (e) => {
    // console.log(e.);
    if (e.keyCode === 13 && tagValue) {
      setTag([...tag, tagValue]);
      setTagValue("");
      document.getElementById("tagInput").value = "";
    }
  };

  const handleDeletTagItem = (id) => {
    const remaining = tag.filter((t) => tag.indexOf(t) !== id);
    setTag(remaining);
  };

  return (
    <>
      <h1 className="tex-center">Add Tag</h1>

      <div
        style={{ border: "1px solid gray " }}
        className="w-[300px] p-2 h-auto rounded-md max-w-xs my-5 flex flex-wrap"
      >
        {tag.map((t, index) => (
          <button
            onClick={() => handleDeletTagItem(index)}
            key={index}
            className="px-3 py-2 m-1 rounded-lg"
          >
            {t} <span className="me-1">x</span>
          </button>
        ))}
        <input
          onChange={(e) => setTagValue(e.target.value)}
          onKeyUp={addTag}
          type="text"
          id="tagInput"
          defaultValue={tagValue}
          className="focus:border-none focus:outline-none max-w-full"
          placeholder="add tag click here to"
        />
      </div>
    </>
  );
}

export default App;
