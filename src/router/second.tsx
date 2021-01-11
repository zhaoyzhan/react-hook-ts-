import React from 'react';
// import { CSSTransition } from 'react-transition-group';
export default (Main: any, url: string) => {
    return () => {
        // const [flag, setF] = React.useState<boolean>(false)
        // React.useEffect(() => {
        //     setF(true)
        //     console.log('jjkkk------kkkkk')
        //     return () => {
        //         setF(false)
        //     }
        // }, [])
        return (
            <div className="content_height flex">
                <Main furl={url}/>
                {/* <CSSTransition
                    in={flag}
                    classNames={{
                        enter: 'animated',
                        enterActive: 'bounceIn',
                        exit: 'animated',
                        exitActive: 'bounceOut'
                    }}
                    timeout={500}
                    mountOnEnter={true}
                    unmountOnExit={true}
                    >
                    <Main furl={url}/> 
                </CSSTransition> */}
            </div>
        )
    }
}