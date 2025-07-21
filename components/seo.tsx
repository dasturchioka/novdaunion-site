import Head from 'next/head'

type Props = {
	title?: string
	description?: string
	keywords?: string
	image?: string
	url?: string
	noIndex?: boolean
}

export default function Seo({
	title = 'Novda Union – Reliable Logistics Company in Uzbekistan',
	description = 'Minimalistic, yet efficient IT solutions for business across the Central Asia',
	keywords = 'CRM systems, LMS, IELTS cd-based mock exams, logistics, freight, cargo, Uzbekistan, transportation, Novda Union, Sardor Aminov',
	image = 'https://novdaunion.uz/og-image.jpg',
	url = 'https://novdaunion.uz',
	noIndex = false,
}: Props) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				<meta name='author' content='Novda Union' />
				<meta name='robots' content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
				<link rel='canonical' href={url} />

				{/* Open Graph */}
				<meta property='og:title' content={title} />
				<meta property='og:description' content={description} />
				<meta property='og:image' content={image} />
				<meta property='og:url' content={url} />
				<meta property='og:type' content='website' />

				{/* Twitter */}
				<meta name='twitter:card' content='summary_large_image' />

				{/* Theme */}
				<meta name='theme-color' content='#ffffff' media='(prefers-color-scheme: light)' />
				<meta name='theme-color' content='#000000' media='(prefers-color-scheme: dark)' />
			</Head>

			{/* Structured Data */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'Novda Union',
						url: 'https://novdaunion.uz',
						logo: 'https://novdaunion.uz/logo.png',
						contactPoint: {
							'@type': 'ContactPoint',
							telephone: '+998-95-171-31-47',
							contactType: 'Customer Service',
							areaServed: 'UZ',
						},
						sameAs: [
							'https://www.instagram.com/novdaunion',
							'https://uz.linkedin.com/company/novda-union',
						],
					}),
				}}
			/>
		</>
	)
}
