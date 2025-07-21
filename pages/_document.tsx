import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
		<Html lang='en'>
			<Head>
				{/* Default fallback favicon */}
				<link rel='icon' href='/favicon-light.ico' />

				{/* Light mode icon */}
				<link
					rel='icon'
					type='image/png'
					href='/icons/favicon-light.ico'
					media='(prefers-color-scheme: light)'
				/>

				{/* Dark mode icon */}
				<link
					rel='icon'
					type='image/png'
					href='/icons/favicon-dark.ico'
					media='(prefers-color-scheme: dark)'
				/>

				{/* Apple icons */}
				<link
					rel='apple-touch-icon'
					href='/icons/icon-light-512.png'
					media='(prefers-color-scheme: light)'
				/>
				<link
					rel='apple-touch-icon'
					href='/icons/icon-dark-512.png'
					media='(prefers-color-scheme: dark)'
				/>
				<link rel='canonical' href="https://novdaunion.uz/" />
			</Head>
			<body className='antialiased'>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
