import React from 'react'
import Image from 'next/image'
import NovdaLogo from '../public/novda-logo.svg'
import Silk from '@/components/silk'
import Seo from '../components/seo'


export default function HomePage() {
	return (
		<>
			<Seo
				title='Novda Union'
				url='https://novdaunion.uz/'
			/>
			<div className='h-screen flex items-center justify-center'>
				<div className='bg fixed inset-0 w-full h-screen'>
					<Silk speed={5} scale={1} color='#263BB5' noiseIntensity={1.5} rotation={0} />
				</div>
				<div className='logo'>
					<div className='logo-container relative flex flex-col items-center justify-center'>
						<Image className='w-[100px]' src={NovdaLogo} alt='Novda Union' />
					</div>
				</div>
			</div>
		</>
	)
}
