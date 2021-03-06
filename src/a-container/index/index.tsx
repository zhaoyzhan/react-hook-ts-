import React,{ useEffect, useContext, useCallback, useState } from 'react';
import Pannel from './components/pannel/pannel'
import './index.css'
import { types, countText } from './reduce'
import { useSelector, useDispatch } from 'react-redux'
interface mapT {
    name: string, 
    id: string, 
    resName?: string
}
const defaultData: mapT[] = [{name: '123', id: '1'}, {name: '234', id: '3'}, {name: '345', id: '5'}]
const Index = (props: any) => {
    const { state, dispatch }: { state?: any, dispatch?: any } = useContext(countText);
    const changeReduce = useCallback((type: string, meth: string) => {
        const value: number = meth === 'add' ? state.age + 1 : state.age - 1;
        dispatch({
            type: type,
            value
        })
    }, [state, dispatch])

    useEffect(() => {
        console.log('okokkkk')
        console.log(process.env.REACT_APP_MODE, 'llllll')
    })

    const number: number = useSelector((state: any) => state.newTest)
    const newDispatch = useDispatch()

    const [mapList, setMapl] = useState<mapT[]>(defaultData)

    const setSync = (id: string): Promise<{}> => {
        return new Promise((resolve: any, reject: any) => {
            setTimeout(() => {
                resolve({name: `zhangsda--${id}`})
            }, 2000);
        })
    }

    useEffect(()=>{
        (async () => {
            const res: mapT[] = await Promise.all(defaultData.map(async (item: mapT): Promise<mapT> => {
                const {name}: StringObject = await setSync(item.id);
                return {
                    ...item,
                    resName: name
                }
            }))
            setMapl(res)
        })()
    }, [])

    return (  
            <>    
                <ul>
                    {
                        mapList.map(({name, id, resName}: mapT) => <li key={id}>
                            { name } ---
                            { resName || '' }
                        </li>)
                    }
                </ul>
                <div className="">
                    <button onClick={() => {newDispatch({ type: 'INCREMENT', payload: 10 })}}>{number} +</button>
                    <button onClick={() => {newDispatch({ type: 'DECREMENT', payload: 5 })}}>{number} -</button>
                </div>    
                <div className="">
                    <button onClick={() => changeReduce(types.AGE, 'add')}>{state.age} +</button>
                    <button onClick={() => changeReduce(types.AGE, 'del')}>{state.age} -</button>
                </div> 
                <div className="index-contain ">
                    <Pannel></Pannel>
                    <Pannel></Pannel>
                    <Pannel></Pannel>
                    <Pannel></Pannel>
                </div>  
            </> 
    );
}

export default Index;