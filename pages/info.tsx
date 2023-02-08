import { NextPage } from "next";
import React, { useState } from "react";
import { Layout } from "../components/layouts/Layout";
import { useRouter } from "next/router";

interface Props {}
const Info: NextPage<Props> = () => {
  const [token, setToken] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO HANDLE DATA
    router.push({
      pathname: "/groups",
      query: { token: token },
    });
  };

  return (
    <Layout>
      <div className="flex flex-col items-center">
        <header className="text-center font-bold text-3xl pt-24 pb-4">
          <h1>First, we need some info.</h1>
        </header>
        <div className="px-4">
          <div className="flex shadow-lg shadow-blue-100 rounded-md w-fit p-4 w-max-1/3">
            <div className="flex flex-col text-black text-lg px-4 text-left">
              <p>
                <span className="font-semibold pr-2">1. </span>Login with your
                groupme account here.
              </p>
              <p>
                <span className="font-semibold pr-2">2. </span> After verifying
                your identity etc, click the button labeled{" "}
                <span className="font-semibold rounded-md border border-black p-1">
                  Access Token
                </span>{" "}
                on the top right corner next to your name.
              </p>
              <p>
                <span className="font-semibold pr-2">3. </span>Copy the access
                token, and paste below!
              </p>
            </div>
          </div>
          <form
            className="flex flex-col pt-4 space-y-2"
            onSubmit={handleSubmit}
          >
            <label className="font-semibold">API Token</label>
            <input
              id="token"
              name="token"
              type="text"
              className="border border-gray-300 rounded-md p-1 shadow-lg"
              onChange={(e) => setToken(e.target.value)}
            ></input>
            <div className="flex justify-end">
              <div className="self-end">
                <button
                  type="submit"
                  className="bg-blue-500 p-3 rounded-lg text-white text-normal w-content shadow-lg"
                >
                  Get My Results
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Info;
