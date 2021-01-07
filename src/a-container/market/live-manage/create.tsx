import React, { useMemo, useState, useCallback } from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import Steps from './components/steps';
import StepForm from './components/step-form';

const Index = () => {
    const [stepIdx, setStepIdx] = useState<number>(1);
    const changeStep = useCallback((step: number) => {
        setStepIdx(step)
    }, [])
    const useSteps = useMemo(() => <Steps stepIdx={stepIdx}/>, [stepIdx])
    const useStepForm = useMemo(() => <StepForm changeStep={changeStep} stepIdx={stepIdx}/>, [changeStep, stepIdx])
    return <div className="padding_22_18">
        { useBread() }
        <div className="modules">
            { useSteps }
            { useStepForm }
        </div>
    </div>
}

export default Index;