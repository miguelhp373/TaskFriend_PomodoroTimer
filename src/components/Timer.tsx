import { useContext } from 'react';
import {CountdownContext} from '../ContextApi/CountdownContext'

import timerStyles from '../styles/components/timer.module.css'

export default function Timer() {

    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown
      } = useContext(CountdownContext);


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function teste(){
        alert('teste')
    }
    return (
        <>
            <span className={timerStyles.cycleStep}>Cycle 01</span>
            <div className={timerStyles.container}>

                <div className={timerStyles.timerCircleContainer}>
                    <div className={timerStyles.numbersColumns}>
                        <div className={timerStyles.numbersRow}>
                            <div className={timerStyles.minutesNumbers}>
                                <span>{minuteLeft}</span>
                                <span>{minuteRight}</span>
                            </div>
                            <div>
                                <span>:</span>
                            </div>
                            <div className={timerStyles.secondsNumbers}>
                                <span>{secondLeft}</span>
                                <span>{secondRight}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={timerStyles.containerButtons}>
                <div className={timerStyles.buttonStart}>
                    {isActive?
                        <button disabled onClick={startCountdown}>Start</button> 
                        :
                        <button onClick={startCountdown}>Start</button>
                    }
                </div>
                <div className={timerStyles.buttonNext}>
                    {hasFinished?
                        <button onClick={teste}>Next Cycle</button>
                        :
                        <button disabled>Next Cycle</button>
                    
                    }
                </div>
                <div className={timerStyles.buttonEnd}>
                    <button onClick={resetCountdown}>Reset</button>
                </div>
            </div>
        </>

    )
}