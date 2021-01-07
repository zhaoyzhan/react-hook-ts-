import React, {useRef, useEffect, useCallback} from 'react';
import { Tabs } from 'antd';
import './index.scss';

const { TabPane } = Tabs;

const Index: React.SFC<{tabs: string[], changeIdx: (idx: number) => void, pageIdx?: number}> = ({tabs, changeIdx, pageIdx = 0}) => {
    const callbackRef: any = useRef(null)
    const tabChange = useCallback(
        (idx: string) => callbackRef.current(Number(idx)),
        [callbackRef],
    )
    useEffect(() => {
        callbackRef.current = changeIdx;
        return () => {
            callbackRef.current = null;
        }
    })
    return (
        <Tabs 
            onChange={tabChange}
            defaultActiveKey={String(pageIdx)}
            className="default_tabs">
            {
                tabs.map((item: string, index: number) => <TabPane tab={item} key={index}></TabPane>)
            }
        </Tabs>
    );
}

export default Index;