import React from 'react'
import RoleCard from './RoleCard'
import { Link } from 'react-router-dom'

const Jobs = () => {
    let roles = ["Junior Developer", " Senior Developer", " Team Lead", " Project Manager"]
    return (
        <>
            <div className='main-div'>
                <h1>Company Culture</h1>
                <p>Some days when the company is overworked with deadlines and various projects, I often see my team sitting together, joking around with each other, helping each other out and having a pretty cheerful time in a rather stressful situation, and they do manage to deliver their tasks on time. At moments like these, I think to myself, wow what a great company culture we have built here. Company culture can so easily be overlooked by businesses. They often tend to forget that there is more to employee satisfaction than just monetary benefits. It is important to create an environment where all members have good chemistry and are able to interact with each other, their queries and issues are considered and acted upon and they don't hesitate to reach out to their boss either. But our company culture wasn't like this from the get go. A lot of disputes, angry meetings with the team, missed deadlines took place before we reached this stage. It's the behind the scenes not many people talk about, which has taught me to mend things, balance the team requirements with the company's priorities and reach the optimum level where it is a win-win for all.</p>
            </div>
            <h2 style={{ color: "white", fontWeight: "bold" }}>Open Jobs</h2>
            <div className='jobs-div'>
                {
                    roles.map((role, index) => {
                        return <a href={`#`}><RoleCard role={role} /></a>
                    }
                    )
                }

            </div>
        </>
    )
}

export default Jobs
