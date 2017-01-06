import React from 'react'
import './styles.css'
import CurriculumGroup from '../CurriculumGroup'
export default ({
  title,
  titleItalic,
  groups
}) => (
  <section className='cv-part'>
    <h2>{title}</h2>

    {Object.keys(groups).map(groupId => (
      <CurriculumGroup
        key={groupId}
        group={groups[groupId]}
      />
    ))}
  </section>
)
