import React, {Suspense} from 'react';

export default (Main: any) => {
	return () => {
		return (
			<Suspense fallback={<div style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
    			justifyContent: 'center'
			}}>loading....</div>}>
				<Main />
			</Suspense>
		)
	}
}