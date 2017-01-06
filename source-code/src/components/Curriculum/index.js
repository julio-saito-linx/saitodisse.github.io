import React from 'react'
import './styles.css'
import CurriculumSection from '../CurriculumSection'

export default () => (
  <div id='home-container'>

    <section>
      <div className='top-info'>
        <div id='pic-and-title'>
          <img
            className='profile-photo'
            src='/images/IMG_24.jpg'
            alt='profile photo'
          />
        </div>
        <div className='contact-info'>
          <div className='list-item'>
            <h2 id='fullname'>Julio Makdisse Saito</h2>
          </div>
          <div className='list-item'>
            email: <a href='mailto:saitodisse@gmail.com'>saitodisse@gmail.com</a>
          </div>
          <div className='list-item'>
            phone: <a href='tel:(+55) 11 965-697-834'>(+55) 11 965-697-834</a>
          </div>
          <div className='list-item'>
            skype_id: saitodisse
          </div>
          <div className='list-item'>
            birth year: 1981
          </div>
          <div className='list-item'>
            nationality: Brazil
          </div>
        </div>
      </div>
    </section>

    <CurriculumSection
      title='Experience'
      groups={{
        Azuki: {
          title: 'Azuki',
          subtitle: 'developer',
          date: 'Oct 2014 → Nov 2016',
          details: {
            azk: {
              title: 'azk',
              url: 'https://github.com/azukiapp/azk/graphs/contributors',
              description: 'dev orchestration tool  (node.js)'
            },
            liveguide: {
              title: 'liveguide',
              url: 'http://www.liveguide.me/home-en',
              description: 'real-time trip recommendations (react native)'
            }
          },
          tags: [
            'javascript',
            'node.js',
            'react',
            'react native',
            'cerebral',
            'mobx',
            'redux',
            'shell-script'
          ]
        },

        Integgro: {
          title: 'Integgro',
          titleItalic: '(as consultant)',
          subtitle: 'developer',
          date: 'Aug 2013 → Nov 2013',
          details: {
            aspnet: {
              description: 'ASP.Net MVC projects'
            }
          },
          tags: ['C#', 'javascript']
        },

        GrupoSHC: {
          title: 'Grupo SHC',
          titleItalic: '(autotrader)',
          subtitle: 'developer',
          date: '2006 → 2012',
          details: {
            aspnet: {
              description: 'Apollo (internal autotrader\'s projects)'
            }
          },
          tags: [
            'C#',
            'javascript',
            'asp.net-mvc',
            'kendoui',
            'moq',
            'jQuery',
            'nInject',
            'knockout.js',
            'log4net',
            'autoMapper',
            'nVelocity',
            'fluentNhibernate'
          ]
        },

        Everis: {
          title: 'Everis',
          titleItalic: '(as consultant)',
          subtitle: 'developer',
          date: 'May 2005 → Feb 2006',
          tags: [
            'javascript',
            'asp',
            'vb6'
          ]
        },

        GEMPI: {
          title: 'GEMPI',
          subtitle: 'developer',
          date: 'Aug 2003 → Apr 2005',
          tags: [
            'javascript',
            'asp',
            'vb6'
          ]
        }

      }}
    />

  </div>
)
