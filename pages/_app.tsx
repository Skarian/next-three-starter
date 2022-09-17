import '../styles/globals.css';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import useState from '@components/utils/store';
import Dom from '@components/layout/dom';
import type { CustomAppProps } from '@components/utils/types/page';

const LCanvas = dynamic(() => import('@components/layout/canvas'), {
	ssr: true,
});

function MyApp({ Component, pageProps }: CustomAppProps) {
	const router = useRouter();
	const setRouter = useState((state) => state.setRouter);
	useEffect(() => {
		setRouter(router);
	}, [router, setRouter]);

	return (
		<>
			<Dom>
				<Component {...pageProps} />
			</Dom>
			{Component?.r3f && <LCanvas>{Component.r3f(pageProps)}</LCanvas>}
		</>
	);
}

export default MyApp;
