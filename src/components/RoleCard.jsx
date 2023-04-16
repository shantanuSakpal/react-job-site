import React from 'react'

const RoleCard = ({ role }) => {
    return (
        <div className="card">
            <div className="card-border-top">
            </div>
            <img className="img" src='https://res.cloudinary.com/glide/image/fetch/f_auto,w_500,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FVKNiD3wfhAZDbZ67cZO4%2Fpub%2FJASxNCPM1j1VUH5YWaPA.png' />

            <span>

                INTERNSHIP

            </span>
            <h1 className="job"> {role}</h1>

        </div>
    )
}

export default RoleCard
