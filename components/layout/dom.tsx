import useStore from '@components/utils/store';
import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

const Dom = ({ children }: { children: ReactNode }) => {
	const setDom = useStore((state) => state.setDom);
	const ref = useRef(null);
	useEffect(() => {
		if (ref.current) {
			setDom(ref.current);
		}
	}, [setDom, ref]);

	return (
		<div
			className="absolute top-0 left-0 z-10 w-screen h-screen overflow-hidden dom"
			ref={ref}
		>
			{children}
		</div>
	);
};

export default Dom;
