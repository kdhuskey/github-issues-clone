import React, { useEffect, useState } from 'react'
import Issue from './Issue'
import styles from './IssueList.module.css'

function IssueList() {
    const [ issue, setIssue] = useState([])
    const getIssue = function(){
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
        .then(res => res.json())
        .then(data => {
            setIssue(data)
        })
    }
    useEffect(function(){
        getIssue()
    }, [])

  return (
    <div className={styles.issueList}>
      {
        issue.map(function(issue){
          return <Issue key={issue.id} issue={issue}  />
        })
        
      }
    </div>
  )
}

export default IssueList