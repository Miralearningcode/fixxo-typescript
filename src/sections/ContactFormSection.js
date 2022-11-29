import React, { useState } from 'react'

const ContactFormSection = () => {
  let currentPage = "Contact Us"
  window.top.document.title = `${currentPage} | Fixxo.` 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [failedSubmit, setFailedSubmit] = useState(false)

  const handleChange = (e) => {
    // const {id, value} = e.target
    // switch(id) {
    //   case 'name':
    //     setName(value)
    //     break
    //   case 'email':
    //     setEmail(value)
    //     break
    //   case 'comments':
    //     setComments(value)
    //     break
    // }

    // setErrors({...errors, [id]: validate(e)})
  }

  const handleSubmit = async (e) => {
    // e.preventDefault()
    // setFailedSubmit(false)
    // setSubmitted(false)

    // setErrors(validate(e, {name, email, comments}))
  
    // if (errors.name === null && errors.email === null && errors.comments === null) {

    //     let json = JSON.stringify({ name, email, comments})
    
    //     setName('')
    //     setEmail('')
    //     setComments('')
    //     setErrors({})

    //     if(await submitData('https://win22-webapi.azurewebsites.net/api/contactform', 'POST', json, )) {
    //         setSubmitted(true)
    //         setFailedSubmit(false)
    //     }else {
    //         setSubmitted(false)
    //         setFailedSubmit(true)
    //     }
        
    // } else {
    //     setSubmitted(false)
    // }
  }




  return (
    <section className="contact-form mt-5">
      <div className="container">
        
        {
        submitted ? (
        <div className="alert alert-success text-center mb-5" role="alert">
            <h3>Thank you for your comments</h3> 
            <p>We will contact you as soon as possible.</p>
            </div>  ) : (<></>)
        }

        {
        failedSubmit ? (
        <div className="alert alert-danger text-center mb-5" role="alert">
            <h3>Something went wrong!</h3> 
            <p>Your comment has not been posted</p>
            </div>  ) : (<></>)
        }
        
        
        <h2>Come in Contact with Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <input id="name" className={(errors.name ? 'error': '')} value={name} onChange={handleChange} type="text" placeholder="Your Name" />
            <div className="errorMessage">{errors.name}</div>
          </div>
          <div>
            <input id="email" className={(errors.email ? 'error': '')} value={email} onChange={handleChange} type="email" placeholder="Your Mail" />
            <div className="errorMessage">{errors.email}</div>
          </div>
          <div className="textarea">
          <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} value={comments} onChange={handleChange} placeholder="Comments"></textarea>
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