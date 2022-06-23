import React from 'react'
import PropTypes from 'prop-types'
import styles from './Issue.module.css'
import IssueList from './IssueList'

function Issue(props) {
  // const title = props.issue.title
  // const user = props.issue.user
  const { title, user, number, created_at, labels} = props.issue
  const formattedDate = new Date(created_at)
// console.log(test.id, 12)
  return (
    
    <div className={styles.issue}>
      <h4><a href={props.issue.html_url}>{title}</a></h4>
      <div>
        {labels.map(function(label, i){
            return(
            <span>{label.name}</span>
            )
        })}
      </div>
      <div className={styles.issueMeta}>
        #{number} opened at {formattedDate.toLocaleString()} by <a href={user.html_url}>{user.login}</a>
      </div>
    </div>
  )
}
Issue.propTypes = {
  issue: PropTypes.object
}

export default Issue