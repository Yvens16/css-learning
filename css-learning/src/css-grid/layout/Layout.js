/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
require('./layout.scss')


//Stateless component should be Functionnal
export default class Layout extends Component {
  render () {
    return (
      <div className='container'>
        <header className='logo'>
          <h1>
            <a href='#'>Demo Site</a>
          </h1>
        </header>

        <nav className='main-menu'>
          <ul>
            <li className='main-menu__item'>
              <a href='#'>Our client</a>
            </li>
            <li className='main-menu__item'>
              <a href='#'>Products</a>
            </li>
            <li className='main-menu__item'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>

        <main className='content-area'>
          <h2>Welcome !</h2>
          <p>Content</p>
        </main>

        <aside className='sidebar'>
          <h3>Additional stuff</h3>

          <ul>
            <li>Items</li>
            <li>Are</li>
            <li>Listed</li>
            <li>Here</li>
            <li>Wow !</li>
          </ul>
        </aside>

        <section className='sponsors-wrapper'>
          <h2>Our sponsors</h2>
          <section className='sponsors'>
            <figure className='sponsor'>
              <img src='https://via.placeholder.com/150x150' alt='placeholder' />
            </figure>
            <figure className='sponsor'>
              <img src='https://via.placeholder.com/200x150' alt='placeholder' />
            </figure>
            <figure className='sponsor'>
              <img src='https://via.placeholder.com/100x200' alt='placeholder' />
            </figure>
            <figure className='sponsor'>
              <img src='https://via.placeholder.com/100x100' alt='placeholder' />
            </figure>
            <figure className='sponsor'>
              <img src='https://via.placeholder.com/200x200' alt='placeholder' />
            </figure>
          </section>
        </section>

        <footer className="footer">
          <p>&copy; 2019 White&amp;Sons LLC. All rights (perhaps) reserved Buckler, Craig. CSS Grid Layout: 5 Practical Projects </p>
        </footer>

      </div>
    )
  }
}
