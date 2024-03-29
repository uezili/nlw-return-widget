import { useState } from "react";
import { CloseButton } from "../CloseButton";
import { FeedbackTypesSteps } from "./Steps/FeedbackTypeStep";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problem",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Idea",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de um lampada",
    },
  },
  OTHER: {
    title: "Other",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um nuvem",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

  const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null)


  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {!feedbackType ? (
         <FeedbackTypesSteps onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType}/>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela {""}
        <a
          className="underline underline-offset-2"
          href="http://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
