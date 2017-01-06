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
          titleItalic: ' (as consultant)',
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
          titleItalic: ' (autotrader)',
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
          titleItalic: ' (as consultant)',
          subtitle: 'developer',
          date: 'May 2005 → Feb 2006',
          tags: [
            'javascript',
            'ASP',
            'VB6'
          ]
        },

        GEMPI: {
          title: 'GEMPI',
          subtitle: 'developer',
          date: 'Aug 2003 → Apr 2005',
          tags: [
            'javascript',
            'ASP',
            'VB6'
          ]
        }

      }}
    />

    <CurriculumSection
      title='Education'
      groups={{
        Fatec: {
          title: 'Engineering technologist Computer data processing',
          subtitle: 'FATEC SP',
          date: '2001 → 2007',
          tags: [
            'C',
            'pascal',
            'java',
            'SQL',
            'algorithm',
            'databases',
            'business',
            'project-management'
          ]
        }
      }}
    />

    <CurriculumSection
      title='Projects'
      groups={{
        pixijs: {
          title: 'pixijs-cerebral',
          date: 'Dec 2016',
          tags: [
            'cerebral',
            'pixijs',
            'reactjs'
          ]
        },
        reactNativeCerebral2: {
          title: 'reactNativeCerebral2',
          date: 'Dec 2016',
          tags: [
            'cerebral',
            'react-native'
          ]
        },
        mdList: {
          title: 'markdown chat',
          date: 'Aug 2016 → Oct 2016',
          tags: [
            'cerebral',
            'firebase',
            'elasticsearch',
            'notifications',
            'flexbox',
            'elasticsearch-2.0',
            'reactjs'
          ]
        },
        twitterStreamCli: {
          title: 'twitter-stream-cli',
          date: 'Jul 2016',
          tags: [
            'firebase',
            'twitter',
            'rxjs',
            'chalk',
            'gulp',
            'babeljs'
          ]
        },
        azk: {
          title: 'azk',
          date: 'Sep 2013 → Feb 2016',
          tags: [
            'javascript',
            'node.js',
            'shell',
            'docker'
          ]
        }
      }}
    />

    <CurriculumSection
      title=''
      groups={{
        cv: {
          /* title: 'Curriculum Vitae', */
          titleItalic: 'External links',
          details: {
            cv: {
              title: 'cv',
              url: 'http://stackoverflow.com/cv/saitodisse',
              description: ' (on stack overflow)'
            },
            linkedin: {
              title: 'linkedin',
              url: 'https://www.linkedin.com/in/julio-makdisse-saito-868707a'
            }
          }
        }
      }}
    />

  </div>
)
