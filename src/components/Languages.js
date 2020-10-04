import React from 'react';

function Languages(props) {

  const languages = props.languages.map((lang) => {
    return (
      <div className="language-container" key={lang.language}>
        <div className="lang">{lang.language}</div>
        <div className="bar-container">
          <div className="bar" style={{ width: lang.percent }} />
        </div>

      </div>
    )
  })

  return (
    <div>
      {languages}
    </div>
  )
}

export default Languages;