import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient-text">
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non, incidunt ipsum eaque perferendis ea modi vel fugiat dolore maxime quos molestias quibusdam ducimus? Minus repellendus ex ea tempore aspernatur.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='your email address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non, incidunt ipsum eaque perferendis ea modi vel fugiat dolore maxime quos molestias quibusdam ducimus? Minus repellendus ex ea tempore aspernatur.
          </p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt="AI" />
      </div>
    </div>
  )
}

export default Header