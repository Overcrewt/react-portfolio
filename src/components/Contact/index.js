import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const str = 'Contact'
const str2 = 'me'
const strArray = [...str]
const strArray2 = [...str2]
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_54nhwbj',
        'template_s9jdcfj',
        refForm.current,
        'bvznDhhYkXoLwDc0z'
      )
      .then(
        () => {
          alert('Message successfuly sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again!')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={15}
            ></AnimatedLetters>
            &nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray2}
              idx={22}
            ></AnimatedLetters>
          </h1>

          <p>
            Labore magna tempor est voluptate est est eu reprehenderit
            consectetur incididunt commodo aute pariatur. Irure laborum in
            voluptate est ex. Consectetur excepteur quis nostrud Lorem minim
            consequat ea tempor. Cupidatat est irure aute anim consequat et
            incididunt duis culpa officia et ex esse dolor. Magna cupidatat
            cupidatat ea Lorem mollit consequat quis eu cillum do non.
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="Submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  )
}

export default Contact
