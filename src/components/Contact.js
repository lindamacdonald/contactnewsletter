import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormAlert from './FormAlert'
import FormField from './FormField'
import contact from './../util/contact'

function Contact(props) {
	const [pending, setPending] = useState(false)
	const [formAlert, setFormAlert] = useState(null)
	const { handleSubmit, register, errors, reset } = useForm()

	const onSubmit = (data) => {
		// Show pending indicator
		setPending(true)

		contact
			.submit(data)
			.then(() => {
				// Clear form
				reset()
				// Show success alert message
				setFormAlert({
					type: 'success',
					message: 'Your message has been sent!',
				})
			})
			.catch((error) => {
				// Show error alert message
				setFormAlert({
					type: 'error',
					message: error.message,
				})
			})
			.finally(() => {
				// Hide pending indicator
				setPending(false)
			})
	}

	return (
		<>
			{formAlert && (
				<FormAlert type={formAlert.type} message={formAlert.message} />
			)}

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='field-horizontal'>
					<div className='field-body'>
						<FormField
							name='name'
							type='text'
							size='medium'
							placeholder='Name'
							error={errors.name}
							inputRef={register({
								required: 'Please enter your name',
							})}
						/>

						<FormField
							name='email'
							type='email'
							size='medium'
							placeholder='Email'
							error={errors.email}
							inputRef={register({
								required: 'Please enter your email',
							})}
						/>

						<FormField
							name='message'
							type='textarea'
							size='medium'
							placeholder='Message'
							rows={5}
							error={errors.message}
							inputRef={register({
								required: 'Please enter a message',
							})}
						/>

						<div className='control'>
							<button
								className={'button is-medium' + (pending ? ' is-loading' : '')}
								type='submit'>
								send boð
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	)
}

export default Contact
