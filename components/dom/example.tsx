import React, { useEffect, useState } from 'react';
import { CustomPage } from '@components/utils/types/page';
import useStore from '@components/utils/store';

const DomExample: CustomPage = () => {
	const [route, setRoute] = useState('');
	const router = useStore((state) => state.router);
	useEffect(() => {
		if (router) {
			setRoute(router.pathname);
		}
	}, [router]);
	return (
		<div className="pointer-events-none absolute top-8 left-1/2 -translate-x-1/2 transform select-none bg-gray-900 px-4 py-2 text-base text-gray-50 shadow-xl">
			<p>
				This is a minimal starter for Nextjs + Threejs. Click on the 3D object
				to navigate to another page. OrbitControls is enabled by default.
			</p>
			<br />
			<p className="text-center">
				Current Route:{' '}
				<span className="bg-gray-500 text-green-200">{route}</span>
			</p>
		</div>
	);
};

export default DomExample;
