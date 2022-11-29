import React, { useState } from 'react'
import AlertNotification from '../components/AlertNotification'
import { validateEmail, validateText } from '../utilities/validation'

interface ContactFormDataProps {
  name: string
  email: string
  comments: string
}

const ContactFormSection: React.FC = () => {
  // let currentPage = "Contact Us"
  // window.top.document.title = `${currentPage} | Fixxo.` 
  const default_values: ContactFormDataProps = {name: '', email: '', comments: ''}
  const [formData, setFormData] = useState<ContactFormDataProps>(default_values)
  const [errors, setErrors] = useState<ContactFormDataProps>(default_values)
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [failedSubmit, setFailedSubmit] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    setFormData({...formData, [id]: value})

    if (id === 'name')
      setErrors({...errors, [id]: validateText(id, value)})

    if (id === 'email')
      setErrors({...errors, [id]: validateEmail(id, value)})
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {id, value} = e.target
    setFormData({...formData, [id]: value})

    if (id === 'comments')
      setErrors({...errors, [id]: validateText(id, value, 5)})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(false)
    setFailedSubmit(false)
    
    if (formData.name !== '' && formData.email !== '' && formData.comments !== '')
    if (errors.name === '' && errors.email === '' && errors.comments === '') {

      const res = await fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (res.status === 200) {
        setSubmitted(true)
        setFormData(default_values)
      } else {
        setSubmitted(false)
        setFailedSubmit(true)
      }
    }
  }




  return (
    <section className="contact-form mt-5">
      <div className="container">
        
        { submitted ? (<AlertNotification alertProps="success" title="Thank you for your comments!" text="We will contact you as soon as possible" />) : (<></>)}
        { failedSubmit ? (<AlertNotification alertProps="danger" title="Something went wrong!" text="Your comment has not been posted" />) : (<></>)}

        <h2>Come in Contact with Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input id="name" className={(errors.name ? 'error': '')} value={formData.name} onChange={(e) => handleChange(e)} type="text" placeholder="Your Name" />
            <div className="errorMessage">{errors.name}</div>
          </div>
          <div>
            <input id="email" className={(errors.email ? 'error': '')} value={formData.email} onChange={(e) => handleChange(e)} type="email" placeholder="Your Mail" />
            <div className="errorMessage">{errors.email}</div>
          </div>
          <div className="textarea">
          <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} value={formData.comments} onChange={(e) => handleTextAreaChange(e)} placeholder="Comments"></textarea>
            <div className="errorMessage">{errors.comments}</div>
          </div>
          <div className="formBtn">
            <button type="submit" className="btn-theme">Post Comments</button>
          </div>
        </form>    
      </div>
    </section>
  )
}

export default ContactFormSection