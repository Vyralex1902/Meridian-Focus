import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import ButtonCard from "./buttonCard";
import ToolButton from "./toolButton";
import GlowCards from "./glowCards";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");



  useEffect(() => {
    const cardsElement = document.getElementById("cards");
    if (cardsElement) {
      cardsElement.onmousemove = e => {
        for (const card of document.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

          card.setAttribute("style", "--mouse-x: " + x + "px; --mouse-y:" + y + "px;");
        };
      }
    }

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

        <div id="toolBtnsContainer1" className="flex items-center p-2 bg-blue-500">
          <ToolButton icon={reactLogo} text="Stop"></ToolButton>
          <ToolButton icon={reactLogo} text="Reset"></ToolButton>
          <ToolButton icon={reactLogo} text="Pause"></ToolButton>
        </div>
        <div id="toolBtnsContainer2" className="flex items-center p-2 bg-blue-500">
          <input
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Search..."
            className="w-full h-full"
          />
        </div>
        <div id="toolBtnsContainer3" className="flex items-center p-2 bg-blue-500">
          <ToolButton icon={reactLogo} text="Add"></ToolButton>
          <ToolButton icon={reactLogo} text="Remove"></ToolButton>
          <ToolButton icon={reactLogo} text="Clear"></ToolButton>
        </div>
        <div className="midWrapper">
          <GlowCards></GlowCards>
          {/* <div className="flex justify-center">
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
          </div> */}
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
