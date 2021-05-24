import Reclear, { useState, useEffect } from 'react';
import useCountDown from 'react-countdown-hook';
import Currently from './currently';


export default function Timer({stepNumber, pickSide, paused, color}) {
    const [orderBankTimeValue, setOrderBankTimeValue] = useState(90 * 1000);
    const [chaosBankTimeValue, setChaosBankTimeValue] = useState(90 * 1000);
    const banTime = 13 * 1000;
    const pickTime = 18 * 1000;

    const [timerValue, { start, pause, resume, reset }] = useCountDown(18 * 1000, 1000); //second timer with 1 second interval
    const [timerTicking, setTimerTicking] = useState(false);
    const [bankTimerTicking, setBankTimerTicking] = useState(false);
    const [bankTimeOrderUsed, setBankTimeOrderUsed] = useState(false);
    const [bankTimeChaosUsed, setBankTimeChaosUsed] = useState(false);

    const startBanTimer = () => {
        setBankTimerTicking(false);
        start(banTime);
        setTimerTicking(true);
    };
    const startPickTimer = () => {
        setBankTimerTicking(false);
        start(pickTime);
        setTimerTicking(true);
    };
    
  useEffect(() => {
      if(paused == true)
      {
          pause();
          setBankTimerTicking(false);
          setTimerTicking(false);
      }
      else {
      //#region ban phase 1
      if(stepNumber == 1) // order ban 1
      {
        startBanTimer();
      }
      else if(stepNumber == 2) // chaos ban 1
      {
        startBanTimer();
      }
      else if(stepNumber == 3) // order ban 2
      {
        startBanTimer();
      }
      else if(stepNumber == 4) // chaos ban 2
      {
        startBanTimer();
      }
      else if(stepNumber == 5) // order ban 3
      {
        startBanTimer();
      }
      else if(stepNumber == 6) // chaos ban 3
      {
        startBanTimer();
      }
      //#endregion
      //#region pick phase 1
      if(stepNumber == 7) // order 1
      {
        startPickTimer();
      }
      else if(stepNumber == 8) // chaos 1 and 2
      {
        startPickTimer();
      }
      else if(stepNumber == 9) // order 2 and 3
      {
        startPickTimer();
      }
      else if(stepNumber == 10) // chaos 3
      {
        startPickTimer();
      }
      //#endregion
      //#region ban phase 2
      if(stepNumber == 11) // chaos ban 4
      {
        startBanTimer();
      }
      else if(stepNumber == 12) // order ban 4
      {
        startBanTimer();
      }
      else if(stepNumber == 13) // chaos ban 5
      {
        startBanTimer();
      }
      else if(stepNumber == 14) // order ban 5
      {
        startBanTimer();
      }
      //#endregion
      //#region pick phase 2
      if(stepNumber == 15) // chaos pick 4
      {
        startPickTimer();
      }
      else if(stepNumber == 16) // order pick 4 and 5
      {
        startPickTimer();
      }
      else if(stepNumber == 17) // chaos pick 5
      {
        startPickTimer();
      }
      //#endregion
      if(stepNumber == 18)
      {
        setBankTimerTicking(false);
        pause();
        setTimerTicking(false);
      }
    }


  }, [stepNumber]);
    
  useEffect(() => {
    //start using banktimer once timer reaches zero
    if(timerValue == 0 && timerTicking == true && pickSide == 0)
    {
      start(orderBankTimeValue);
      setTimerTicking(false);
      setBankTimerTicking(true);
    }
    else if(timerValue == 0 && timerTicking == true && pickSide == 1)
    {
        start(chaosBankTimeValue);
        setTimerTicking(false);
        setBankTimerTicking(true);
    }

    if(timerValue == 0 && bankTimerTicking == true && bankTimeOrderUsed == false)
    {
        pause();
        setBankTimerTicking(false);
        setBankTimeOrderUsed(true);
        console.log("ran out of order bank time");
    }
    else if(timerValue == 0 && bankTimerTicking == true && bankTimeChaosUsed == false)
    {
        pause();
        setBankTimerTicking(false);
        setBankTimeChaosUsed(true);
        console.log("ran out of chaos bank time");
    }

    if(timerValue > 0 &&  bankTimerTicking == true)
    {
        if(pickSide == 0)
        {
            setOrderBankTimeValue(timerValue);
        }
        else if(pickSide == 1)
        {
            setChaosBankTimeValue(timerValue);
        }
    }

},[timerValue]);

        return (
            <h3 className={`mx-auto text-${color}-400`}>{timerTicking == false && bankTimerTicking == false ? "" : (timerValue / 1000).toFixed(0)}</h3>
        );
    }