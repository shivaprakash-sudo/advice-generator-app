import { useEffect, useState } from "react";

const AdviceGenerator = () => {
    const [advice, setAdvice] = useState("");
    const [adviceId, setAdviceId] = useState();

    const getAdvice = async () => {
        try {
            // no-cache because the api caches the advice for 2 seconds.
            const response = await fetch("https://api.adviceslip.com/advice", {
                cache: "no-cache"
            });

            const data = await response.json();

            setAdvice(data.slip.advice);
            setAdviceId(data.slip.id);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <div className="flex flex-col gap-3 sm:gap-0 justify-evenly items-center bg-neutral-200 mx-auto 
                        p-6 pb-10 sm:px-8 w-[90%] sm:w-[570px] h-[60%] sm:h-[20rem] relative rounded-2xl 
                        shadow-[1rem_1rem_3rem_-3rem_neutral-300]">

            <p className="font-semibold text-xs text-center text-neonGreen 
                        uppercase tracking-[0.35em] mt-2">
                Advice #{adviceId}
            </p>
            <blockquote>
                <p className="text-center font-[800] text-lightCyan text-[1.75rem] my-3">"{advice}"</p>
            </blockquote>

            <img className="sm:hidden mb-4" src="images/pattern-divider-mobile.svg" alt="Divider" />
            <img className="hidden sm:block mb-4" src="images/pattern-divider-desktop.svg" alt="Divider" />

            <button className="absolute -bottom-8 rounded-full bg-neonGreen p-5 shadow-xl 
                                hover:shadow-[0_0_1.25rem_neonGreen]" onClick={() => getAdvice()}>
                <img src="images/icon-dice.svg" alt="Dice" />
            </button>
        </div>
    );
}

export default AdviceGenerator;