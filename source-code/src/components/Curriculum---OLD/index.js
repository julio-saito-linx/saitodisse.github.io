import React from 'react'
import './styles.css'
import CurriculumSection from '../CurriculumSection'

export default () => (
  <div id='home-container'>

    <CurriculumSection
      title='Section Title'
      groups={{experience: {
        title: 'title',
        subtitle: 'subtitle',
        date: 'date',
        tags: ['tag1', 'tag2', 'tag3']
      }}}
    />

    <section className='cv-part'>
      <h2>Experience</h2>
      <div className='group'>
        <div className='title'>
          Azuki
        </div>
        <div className='job'>
          developer
        </div>
        <div className='date'>
          Oct 2014 → Nov 2016
        </div>
        <div className='job-detail'>
          <div className='project'>
            <div className='title'>
              <a href='https://github.com/azukiapp/azk/graphs/contributors'>azk</a>
            </div>
            <div className='description'>
              dev orchestration tool  (node.js)
            </div>
          </div>
          <div className='project'>
            <div className='title'>
              <a href='http://www.liveguide.me/home-en'>liveguide</a>
            </div>
            <div className='description'>
              real-time trip recommendations (react native)
            </div>
          </div>
        </div>
        <div className='tags'>
          <div className='tag'>
            javascript
          </div>
          <div className='tag'>
            node.js
          </div>
          <div className='tag'>
            react
          </div>
          <div className='tag'>
            react native
          </div>
          <div className='tag'>
            cerebral
          </div>
          <div className='tag'>
            mobx
          </div>
          <div className='tag'>
            redux
          </div>
          <div className='tag'>
            shell-script
          </div>
        </div>
      </div>

      <div className='group'>
        <div className='title'>
          Integgro <i className='title-small'>(as consultant)</i>
        </div>
        <div className='job'>
          developer
        </div>
        <div className='date'>
          Aug 2013 → Nov 2013
        </div>
        <div className='job-detail'>
          <div className='project'>
            <div className='description'>
              ASP.Net MVC projects
            </div>
          </div>
        </div>
        <div className='tags'>
          <div className='tag'>
            c#
          </div>
          <div className='tag'>
            javascript
          </div>
        </div>
      </div>

      <div className='group'>
        <div className='title'>
          Grupo SHC <i className='title-small'>(autotrader)</i>
        </div>
        <div className='job'>
          developer
        </div>
        <div className='date'>
          2006 → 2012
        </div>
        <div className='job-detail'>
          <div className='project'>
            <div className='description'>
              Apollo (internal autotrader's projects)
            </div>
          </div>
        </div>
        <div className='tags'>
          <div className='tag'>
            c#
          </div>
          <div className='tag'>
            javascript
          </div>
          <div className='tag'>
            asp.net-mvc
          </div>
          <div className='tag'>
            kendoui
          </div>
          <div className='tag'>
            moq
          </div>
          <div className='tag'>
            jquery
          </div>
          <div className='tag'>
            ninject
          </div>
          <div className='tag'>
            knockout.js
          </div>
          <div className='tag'>
            log4net
          </div>
          <div className='tag'>
            automapper
          </div>
          <div className='tag'>
            nvelocity
          </div>
          <div className='tag'>
            fluentnhibernate
          </div>
        </div>
      </div>

      <div className='group'>
        <div className='title'>
          Everis <i className='title-small'>(as consultant)</i>
        </div>
        <div className='job'>
          developer
        </div>
        <div className='date'>
          May 2005 → Feb 2006
        </div>
        <div className='tags'>
          <div className='tag'>
            javascript
          </div>
          <div className='tag'>
            asp
          </div>
          <div className='tag'>
            vb6
          </div>
        </div>
      </div>

      <div className='group'>
        <div className='title'>
          GEMPI
        </div>
        <div className='job'>
          developer
        </div>
        <div className='date'>
          Aug 2003 → Apr 2005
        </div>
        <div className='tags'>
          <div className='tag'>
            javascript
          </div>
          <div className='tag'>
            asp
          </div>
          <div className='tag'>
            vb6
          </div>
        </div>
      </div>
    </section>

    <section className='cv-part'>
      <h2>Education</h2>
      <div className='group'>
        <div className='title'>
          Engineering technologist Computer data processing
        </div>
        <div className='job'>
          FATEC SP
        </div>
        <div className='date'>
          2001 → 2007
        </div>
        <div className='tags'>
          <div className='tag'>
            c
          </div>
          <div className='tag'>
            pascal
          </div>
          <div className='tag'>
            java
          </div>
          <div className='tag'>
            sql
          </div>
          <div className='tag'>
            algorithm
          </div>
          <div className='tag'>
            databases
          </div>
          <div className='tag'>
            business
          </div>
          <div className='tag'>
            project-management
          </div>
        </div>
      </div>
    </section>

    <section className='cv-part'>
      <h2>Projects</h2>

      <div className='group'>
        <div className='title'>
          pixijs-cerebral
        </div>
        <div className='date'>
          Dec 2016 → Dec 2016
        </div>
        <div className='tags'>
          <div className='tag'>
            cerebral
          </div>
          <div className='tag'>
            pixijs
          </div>
          <div className='tag'>
            reactjs
          </div>

        </div>
      </div>

      <div className='group'>
        <div className='title'>
          reactNativeCerebral2
        </div>
        <div className='date'>
          Dec 2016 → Dec 2016
        </div>
        <div className='tags'>
          <div className='tag'>
            react-native
          </div>
          <div className='tag'>
            cerebral
          </div>
        </div>
      </div>

      <div className='group'>
        <div className='title'>
          markdown chat
        </div>
        <div className='date'>
          Aug 2016 → Oct 2016
        </div>
        <div className='tags'>
          <div className='tag'>
            cerebral
          </div>
          <div className='tag'>
            firebase
          </div>
          <div className='tag'>
            elasticsearch
          </div>
          <div className='tag'>
            notifications
          </div>
          <div className='tag'>
            flexbox
          </div>
          <div className='tag'>
            elasticsearch-2.0
          </div>
          <div className='tag'>
            reactjs
          </div>
        </div>
      </div>

      <div className='group'>
        <div className='title'>
          twitter-stream-cli
        </div>
        <div className='date'>
          Feb 2016 → Jul 2016
        </div>
        <div className='tags'>
          <div className='tag'>
            firebase
          </div>
          <div className='tag'>
            twitter
          </div>
          <div className='tag'>
            rxjs
          </div>
          <div className='tag'>
            chalk
          </div>
          <div className='tag'>
            gulp
          </div>
          <div className='tag'>
            babeljs
          </div>
        </div>
      </div>

      <div className='group'>
        <div className='title'>
          azk
        </div>
        <div className='date'>
          Sep 2013 → Feb 2016
        </div>
        <div className='tags'>
          <div className='tag'>
            javascript
          </div>
          <div className='tag'>
            node.js
          </div>
          <div className='tag'>
            shell
          </div>
          <div className='tag'>
            docker
          </div>
        </div>
      </div>
    </section>

    <section className='cv-part'>
      <h2>External links</h2>
      <div className='group'>
        <div className='external-links'>
          <div>
            <a href='http://stackoverflow.com/cv/saitodisse' title='Curriculum vitae on stack overflow'>
              cv
            </a>
            <i className='small-info'> (on stack overflow)</i>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/julio-makdisse-saito-868707a' title='Curriculum vitae at linkedin'>
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
)
