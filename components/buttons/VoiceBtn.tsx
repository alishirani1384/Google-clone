"use client";
import "regenerator-runtime/runtime";
import React, { useEffect } from "react";
import MicroIcon from "../../assets/google-voice.png";
import Image from "next/image";
import { useSearch } from "@/store/search";
import { shallow } from "zustand/shallow";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function VoiceBtn() {
  const { search, setSearch } = useSearch(
    (state) => ({ search: state.search, setSearch: state.setSearch }),
    shallow
  );

  const { transcript, listening } = useSpeechRecognition();

  function handleClick() {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  }
  useEffect(() => {
    setSearch(transcript)
  },[transcript])
  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handleClick}
        className="btn !btn-circle btn-ghost btn-lg gr">
        {listening ? (
          <p>listening...</p>
        ) : (
          <Image src={MicroIcon} width={35} height={25} alt="icon" />
        )}
      </button>
      <p className="uppercase dark:text-gray-300">try with voice</p>
    </div>
  );
}

export default VoiceBtn;
