import type { NextPage } from "next";
import { useState } from "react";
import { FormModal } from "../components/FormModal";
import Link from "next/link";
import { Layout } from "../components/layouts/Layout";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
      <div className="flex flex-col items-center space-y-8 pt-24">
        <div className="flex flex-col items-center text-6xl text-center">
          <header className="font-bold">
            <h1>Real Time.</h1>
          </header>
          <header className="font-bold">
            <h1>Groupme Insights.</h1>
          </header>
        </div>
        <div>
          <header className="text-gray-500 text-2xl px-4 text-center">
            <h2>
              Get your groupchats realtime stats on who is sending the best (or
              most ~controversial~ 🤪) messages.
            </h2>
          </header>
        </div>
        <div className="bg-blue-500 p-3 rounded-lg text-white text-normal w-content">
          <Link href={"/info"}>Get Your Score</Link>
          <FormModal
            isVisible={showModal}
            setIsVisible={setShowModal}
          ></FormModal>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
