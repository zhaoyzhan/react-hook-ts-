import React, { useRef, FC } from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import { Dispatch } from 'redux';
import { addTodo } from '../../../a-actions/types';
import { testAsync } from '../../../a-actions/test';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { IStoreState, todo } from '../../../a-types';
import Transition from '../../../a-components/transition';
import {StepState} from './test-is';

type statePT = { todos: todo[], title: string, acFlag: boolean }

type dispPT = { addTodo: StrParamsVoid, testAsync: ParamsVoid }

const mapStateToProps = (state: IStoreState): statePT => ({
    todos: state.todos,
    title: state.test.title,
    acFlag: state.test.acFlag
})

const mapDispatchToProps = (dispatch: Dispatch): dispPT => ({
    addTodo: (text: string) => dispatch(addTodo(text)),
    testAsync: () => dispatch(testAsync())
})

const Index: FC<statePT & dispPT> = ({ addTodo, todos, testAsync, title, acFlag }) => {
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
    React.useEffect(() => {
        // console.log('llllllll', addTodo)
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
            </div>
            { Stage }
        </div>
    );
}

export default Transition(connect(mapStateToProps, mapDispatchToProps)(Index));