import { useState, useRef } from "react"
import ResultModal from "./ResultModal";


const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;


    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    const handleReset = () => {
        setTimeRemaining(targetTime * 1000);

    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    const handleStop = () => {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            <ResultModal onReset={handleReset} ref={dialog} remainingTime={timeRemaining} targetTime={targetTime} />

            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>{timerIsActive ? "Stop" : "Start"} challenge</button>
                </p>
                <p className={timerIsActive ? "active" : ""}>{timerIsActive ? "Timer is running..." : "Timer inactive"}</p>
            </section>
        </>

    )
}

export default TimerChallenge