import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { FormModal } from "../components/FormModal";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-8 pt-4">
      <div className="flex flex-col items-center text-5xl">
        <header className="font-bold">
          <h1>Real Time.</h1>
        </header>
        <header className="font-bold">
          <h1>Groupme Insights.</h1>
        </header>
      </div>
      <div>
        <header className="text-gray-500 text-xl px-4 text-center">
          <h2>
            Get your groupchats realtime stats on who is sending the best (or
            most controversial 🤪) messages.
          </h2>
        </header>
      </div>
      <div className="flex">
        <button
          className="bg-blue-500 p-3 rounded-lg text-white text-normal w-content"
          onClick={() => setShowModal(true)}
        >
          Get Your Score
        </button>
        <FormModal
          isVisible={showModal}
          setIsVisible={setShowModal}
        ></FormModal>
      </div>
    </div>
  );
};

export default Home;
