import React, { useRef } from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import { Dispatch } from 'redux';
import { addTodo } from '../../../a-actions/types';
import { testAsync } from '../../../a-actions/test';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { IStoreState, todo } from '../../../a-types';

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

const Index = ({ addTodo, todos, testAsync, title, acFlag }: statePT & dispPT) => {
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
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);