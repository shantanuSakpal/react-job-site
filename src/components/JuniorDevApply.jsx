import React from 'react'

const JuniorDevApply = () => {

    return (
        <div class="container">
            <form id="signup" class="form">
                <h2>Job Application Form

                </h2>
                <h5>Personal Details</h5>
                <div class="form-field">
                    <label for="username">Full Name</label>
                    <input type="text" name="username" id="username" autocomplete="off" />
                    <small></small>
                </div>

                <div class="form-field">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" autocomplete="off" />
                    <small></small>
                </div>
                <div class="form-field">
                    <label for="email">Photo</label>
                    <input name="email" id="email"
                        type='file'
                    />
                    <small></small>
                </div>
                <div class="form-field">
                    <label for="phNum">Phone Number</label>
                    <input type="phNum" name="phNum" id="phNum" autocomplete="off" />
                    <small></small>
                </div>
                <h5>Professional Details</h5>
                <div class="form-field">
                    <label for="linkedin">Updated Linkedln Profile</label>
                    <input type="text" name="linkedin" id="linkedin" autocomplete="off" />
                    <small></small>
                </div>

                <div class="form-field">
                    <label for="WorkExp">Work Experience(in Months)
                    </label>
                    <input type="text" name="WorkExp" id="WorkExp" autocomplete="off" />
                    <small></small>
                </div>


                <div class="form-field">
                    <label for="resume">Upload CV
                    </label>
                    <input name="resume" id="resume"
                        type='file'
                    />
                    <small></small>
                </div>

                <div class="form-field">
                    <label for="LoomVideo">Loom Introduction Video
                    </label>
                    <input type="text" name="LoomVideo" id="LoomVideo" autocomplete="off" />
                    <small></small>
                </div>
                <div class="form-field-btn">
                    <button type="submit" class="signUpBtn">Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default JuniorDevApply
