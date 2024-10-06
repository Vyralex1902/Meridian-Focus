import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import ButtonCard from "./buttonCard"; // Import the buttonCard component

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async () => {
      //Create a function that will read the config files and others

    }
  }, []);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <h1 className="text-5xl font-bold my-8">Meridian Focus</h1>
      <div className="w-full h-auto grid grid-cols-3 grid-rows-2" id="gridWrap">

        <div id="toolBtnsContainer1" className="bg-blue-500">
        </div>
        <div id="toolBtnsContainer2" className="bg-blue-500">
        </div>
        <div id="toolBtnsContainer3" className="bg-blue-500">
        </div>
        <div className="midWrapper">
          <div className="flex justify-center">
            <ButtonCard title="Tauri" icon={reactLogo} />
            <ButtonCard title="Tauri" icon={reactLogo} />
            <ButtonCard title="Tauri" icon={reactLogo} />
            <ButtonCard title="Tauri" icon={reactLogo} />
          </div>
          <div className="flex justify-center">
            <ButtonCard title="Tauri" icon={reactLogo} />
            <ButtonCard title="Tauri" icon={reactLogo} />
            <ButtonCard title="Tauri" icon={reactLogo} />
            <ButtonCard title="Tauri" icon={reactLogo} />
          </div>
        </div>


        {/* <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}
        >
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>

        <p>{greetMsg}</p> */}
      </div>
    </div>
  );
}


export default App;
