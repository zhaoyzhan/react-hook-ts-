import React, { useRef } from 'react';
import useBread from '../../../a-components/breadcrumbs/use-bread';
import { Dispatch } from 'redux';
import { addTodo } from '../../../a-actions/types';
import {Input} from 'antd';
import { connect } from 'react-redux';
import { IStoreState, todo } from '../../../a-types';

const mapStateToProps = (state: IStoreState): { todos: any } => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch: Dispatch): { addTodo: (text: string) => void } => ({
    addTodo: (text: string) => dispatch(addTodo(text))
})

const Index = ({ addTodo, todos }: { addTodo: (text: string) => void, todos: todo[] }) => {
    const input = useRef<any>(null)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(!input.current.state.value) return;
        if (!input.current.state.value.trim()) {
            return;
        }
        addTodo(input.current.state.value)
        // dispatch(addTodo(input.current.state.value));
    }
    // useEffect(() => {
    //     console.log(todos, 'todos')
    // }, [todos])
    return (
        <div className="padding_22_18">
            {useBread()}
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
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);