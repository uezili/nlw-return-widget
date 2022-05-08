import { CloseButton } from './CloseButton';

import bugImageUrl from '../assets/bug.svg'; 
import ideaImageUrl from '../assets/idea.svg'; 
import thoughtImageUrl from '../assets/thought.svg'; 

const feedbackTypes = {
    BUG: {
        title: "Problem",
        image: {
            source: "bugImageUrl",
            alt: "Imagem de um inseto",
        }
    },
    IDEA: {
        title: "Idea",
        image: {
            source: "ideaImageUrl",
            alt: "Imagem de um lampada",
        }
    },
    OTHER: {
        title: "Other",
        image: {
            source: "thoughtImageUrl",
            alt: "Imagem de um nuvem",
        }
    }
}
export const WidgetForm = () => { 
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>
                <CloseButton />
            </header>
            <div className="flex py-8 gap-2 w-full">
                <button></button>
            </div>
            <footer className="text-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="http://rocketseat.com.br">Rocketseat</a> 
            </footer>
        </div>
    )
}