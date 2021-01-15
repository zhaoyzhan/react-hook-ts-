import React, { useRef, FC } from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import { Dispatch } from 'redux';
import { addTodo } from '../../../a-actions/types';
import { testAsync, testArr } from '../../../a-actions/test';
import { checkOne } from '../../../a-actions/check';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { IStoreState, todo } from '../../../a-types';
import Transition from '../../../a-components/transition';
import { StepState } from './test-is';
import One from './one';

type statePT = { todos: todo[], title: string, acFlag: boolean }

type dispPT = { addTodo: StrParamsVoid, testAsync: ParamsVoid, testArr: ParamsVoid, checkOne: NumParamsVoid}

const mapStateToProps = (state: IStoreState): statePT => ({
    todos: state.todos,
    title: state.test.title,
    acFlag: state.test.acFlag
})

const mapDispatchToProps = (dispatch: Dispatch): dispPT => ({
    addTodo: (text: string) => dispatch(addTodo(text)),
    testAsync: () => dispatch(testAsync()),
    testArr: () => dispatch(testArr()),
    checkOne: (num: number) => dispatch(checkOne(num))
})

const Index: FC<statePT & dispPT> = ({ addTodo, todos, testAsync, title, acFlag, testArr, checkOne }) => {
    const input = useRef<any>(null)
    const aDiv = useRef<HTMLInputElement>(null)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!input.current.state.value) return;
        if (!input.current.state.value.trim()) {
            return;
        }
        addTodo(input.current.state.value)
    }
    const Stage = React.useMemo(() => <StepState className="12345">
        <p>test-pppp</p>
    </StepState>, [])
    const OneComp = React.useMemo(() => <One />, [])
    React.useEffect(() => {
        console.log('llllllll', testAsync)
    })
    return (
        <div className="padding_22_18">
            {useBread()}
            <h1>{ title }</h1>
            <p ref={ aDiv }>{ todos.length }</p>
            <ul>
                {
                    todos.map((todoI: todo) => (<li key={todoI.id}>{todoI.text}</li>))
                }
            </ul>
            <div className="modules">
                和轮播图一样
                <form onSubmit={ handleSubmit }>
                    <Input ref={ input } />
                    <button type="submit"> Add Todo </button>
                </form>
                <div style={{
                    height: 20
                }}></div>
                <Button onClick={ testAsync } loading={ acFlag }>test-action</Button>
                <br/>
                <Button onClick={ testArr }>testArr</Button>
                <br/>
                <Button onClick={ () => checkOne(12) }>testArr</Button>
            </div>
            { Stage }
            { OneComp }
        </div>
    );
}

export default Transition(connect(mapStateToProps, mapDispatchToProps)(Index));