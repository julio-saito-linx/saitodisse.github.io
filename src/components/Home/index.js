import React from 'react'
import './styles.css'

export default () => (
  <div id='home-container'>

    <header>
      <div id='pic-and-title'>
        <img
          className='profile-photo'
          src='/images/IMG_20161029_030344_processed.jpg'
          alt='profile photo'
        />
        <h1>
          Julio Makdisse Saito
        </h1>
      </div>
      <h2>contact</h2>
      <ul>
        <li>
          <a href='mailto:saitodisse@gmail.com'>saitodisse@gmail.com</a>
        </li>
        <li>
          <a href='tel:(+55) 11 96569-7834'>(+55) 11 96569-7834</a>
        </li>
        <li>
          skype_id: saitodisse
        </li>
        <li>
          São Bernardo do Campo - SP - Brazil
        </li>
      </ul>
    </header>

    <section>
      <h2>Experience</h2>

      <div className='group'>
        <div>
          Date
        </div>
        <div>
          Course
        </div>
        <div>
          Description
        </div>
      </div>
    </section>

    <section>
      <h2>Education</h2>

      <div className='group'>
        <div>
          Date
        </div>
        <div>
          Course
        </div>
        <div>
          Description
        </div>
      </div>
    </section>

    <section>
      <h2>Projects</h2>

      <div className='group'>
        <div>
          Date
        </div>
        <div>
          Course
        </div>
        <div>
          Description
        </div>
      </div>
    </section>

  </div>
)
