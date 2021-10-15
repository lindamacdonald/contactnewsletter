import React from 'react'
import Meta from './../components/Meta'
import Contact from './../components/Contact'
import Newsletter from './../components/Newsletter'

function IndexPage(props) {
	return (
		<>
			<Meta />

			<Contact />

			<Newsletter
				buttonText='Subscribe'
				inputPlaceholder='Enter your email'
				subscribedMessage='You are now subscribed!'
			/>
		</>
	)
}

export default IndexPage
