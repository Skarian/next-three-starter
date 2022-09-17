import type { NextPage } from 'next';
import type { AppInitialProps } from 'next/app';
import type { NextComponentType } from 'next';
import type { AppProps } from 'next/app';

// For _app.tsx, allows r3f property
type CustomAppProps = AppProps & {
	Component: NextComponentType & {
		r3f?: (pageProps: AppInitialProps) => JSX.Element | JSX.Element[];
	};
};

// For other Next.js pages, allows r3f property
type CustomPage = NextPage & {
	r3f?: (pageProps: AppInitialProps) => JSX.Element | JSX.Element[];
};

export type { CustomPage, CustomAppProps };
