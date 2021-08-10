import React, { useCallback, useState } from 'react';
import FirstStep from 'packs/components/elements/firstStep';
import SecondStep from 'packs/components/elements/secondStep';
import ThirdStep from 'packs/components/elements/thirdStep';
import Menu from 'packs/components/elements/menu';
import ScrollButton from 'packs/components/elements/scroll_button';

const steps = [FirstStep, SecondStep, ThirdStep];

export default function Configuration() {
  const [currentStepNumber, setCurrentStepNumber] = useState(0);
  const [configs, setConfigs] = useState({});
  const CurrentStep = steps[currentStepNumber];

  return (
    <React.Fragment>
        <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
        <Menu />
        <main className={'configuration'}>
            <CurrentStep changeStep={useCallback(value => setCurrentStepNumber(prevState => prevState + value))}
                        setConfig={useCallback(configs => setConfigs(configs), [])}
                        intialConfigs={configs} />
        </main>
    
    </React.Fragment>
  )
};
