import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.scss';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";
import { HomePage } from "./components/HomePage/HomePage";
import { Header } from "./components/Header/Header";
import LiveChat from "./components/Livechat/Livechat";

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="App">
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
            <Header />
            <HomePage />
            <LiveChat />
        </div>
    );
}

export default App;
