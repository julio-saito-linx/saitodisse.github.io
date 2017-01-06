import React from 'react'
import './styles.css'

export default ({
  tags
}) => (
  <div className='tags'>
    {tags.map(t => (
      <div className='tag' key={t}>
        {t}
      </div>
    ))}
  </div>
)
