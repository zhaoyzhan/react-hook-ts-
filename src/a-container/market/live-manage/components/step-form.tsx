import React, { FC, useRef, useEffect, useMemo } from 'react';
import { Button } from 'antd';
import StepForm1 from './step-form1';
import StepForm2 from './step-form2';
import StepForm3 from './step-form3';
import { StepState } from './reduce';

const Index: FC<{changeStep: (step: number) => void, stepIdx: number}> = ({changeStep, stepIdx}) => {
    const changeref: any = useRef(null);
    const childRef: any = useRef();
    const useForm = useMemo(() => {
        switch (stepIdx) {
            case 1:
                return <StepForm1 childRef={childRef}/>;
            case 2:
                return <StepForm2 childRef={childRef}/>;
            case 3:
                return <StepForm3 childRef={childRef}/>;
            default:
                return '';
        }
    }, [stepIdx, childRef]);
    const changeSteps = (step: number, type: string) => {
        // console.log(type, 'kkkkk', childRef.current.getData())
        changeref.current(step)
    }
    useEffect(() => {
        changeref.current = changeStep;
        return () => {
            changeref.current = null;
        }
    });
    return <div>
        <div className="step_form_btns">
            <StepState>
                { useForm }
            </StepState>
            {
                stepIdx > 1 && <Button 
                    type="primary" 
                    onClick={() => changeSteps(stepIdx - 1, 'pre')} 
                    style={{width: 82, marginRight: 18}}>上一步</Button>
            }
            {
                stepIdx < 3 && <Button 
                    type="primary" 
                    onClick={() => changeSteps(stepIdx + 1, 'next')} 
                    style={{width: 82}}>下一步</Button>
            }
            {
                stepIdx === 3 && <Button 
                    type="primary" 
                    onClick={() => {}} 
                    style={{width: 68}}>创建</Button>
            }
        </div>
    </div>
}

export default Index;