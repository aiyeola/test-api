"use client";

import React from "react";
import axios from "axios";

export default function Call() {
  return (
    <div className="flex flex-col gap-y-5">
      <Fetch />
      <Axios />
    </div>
  );
}

function Fetch() {
  async function getData() {
    const url = "https://test.api.betrebound.com/api/v1/currency";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log("fetch response: ", json);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return (
    <button
      className="bg-gray-500 text-white w-10 px-10 rounded flex justify-center items-center py-5"
      onClick={getData}
    >
      Fetch
    </button>
  );
}

function Axios() {
  async function getData() {
    const url = "https://test.api.betrebound.com/api/v1/currency";
    try {
      const response = await axios.get(url);
      console.log("axios response: ", response?.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  return (
    <button
      className="bg-gray-500 text-white w-10 px-10 rounded flex justify-center items-center py-5"
      onClick={getData}
    >
      Axios
    </button>
  );
}
