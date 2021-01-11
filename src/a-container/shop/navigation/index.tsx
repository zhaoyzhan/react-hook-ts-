import React, { useRef } from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import { Dispatch } from 'redux';
import { addTodo, testAsync } from '../../../a-actions/types';
import { Input, Button } from 'antd';
import { connect } from 'react-redux';
import { IStoreState, todo } from '../../../a-types';

type statePT = { todos: todo[], title: string }

type dispPT = { addTodo: StrParamsVoid, testAsync: StrParamsVoid }

const mapStateToProps = (state: IStoreState): statePT => {
    return {
        todos: state.todos,
        title: state.test.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch): dispPT => ({
    addTodo: (text: string) => dispatch(addTodo(text)),
    testAsync: (v: string) => dispatch(testAsync(v))
})

const Index = ({ addTodo, todos, testAsync, title }: statePT & dispPT) => {
    const input = useRef<any>(null)
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
            <p>{ todos.length }</p>
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
            </div>
            <Button onClick={ () => testAsync('1234555') }>test-action</Button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);