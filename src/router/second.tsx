import React from 'react';

export default (Main: any, url: string) => {
    return () => {
        return (
            <div className="content_height flex">
                <Main furl={url}/>
            </div>
        )
    }
}