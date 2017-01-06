import React from 'react'
import './styles.css'
import CurriculumTags from '../CurriculumTags'

export default ({
  group
}) => (
  <div className='group'>
    <div className='title'>
      {group.title}
      {group.titleItalic && (
        <i className='title-small'>{group.titleItalic}</i>
      )}
    </div>
    <div className='job'>
      {group.subtitle}
    </div>
    <div className='date'>
      {group.date}
    </div>
    <div className='job-detail'>
      {group.details && Object.keys(group.details).map(detailId => (
        <div className='project' key={detailId}>
          <div className='title'>
            <a href={group.details[detailId].url}>
              {group.details[detailId].title}
            </a>
          </div>
          <div className='description'>
            {group.details[detailId].description}
          </div>
        </div>
      ))}
    </div>
    <CurriculumTags tags={group.tags} />
  </div>
)
