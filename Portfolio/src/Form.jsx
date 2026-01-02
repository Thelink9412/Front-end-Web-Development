import { React, useState } from 'react';

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        math: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState();
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            gender,
            {subjects},
            resume,
            url,
            about,
        )
    }

    function handleReset() {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
    }
    function handleSubjectChange(sub) {
        setSubjects(s => {
            return {...s, [sub] : !s[sub]}
        })
    }

    return (<>
        <form className='form' action="#" onSubmit={handleSubmit} method='get'>
            <h2>Form in React</h2>
            <div className='input-names container'>
                <label htmlFor="firstname">
                    First Name*
                    <input type="text"
                        value={firstName}
                        id='firstname'
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='Enter first name'
                        required
                    />
                </label>

                <label htmlFor="lastname">
                    Last Name*
                    <input type="text"
                        value={lastName}
                        id="lastname"
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Enter last name'
                        required
                    />
                </label>

            </div>
            <div className='container input-contacts'>
                <label htmlFor="email">
                    Enter Email*
                    <input type="text"
                        value={email}
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter valid email'
                        required
                    />
                </label>
                <label htmlFor="contact">
                    Contact*
                    <input type='tel'
                        value={contact}
                        id='contact'
                        onChange={(e) => setContact(e.target.value)}
                        placeholder='Enter Mobile Number'
                        required
                    />
                </label>

            </div>
            <div className='input-gender container'>
                <label htmlFor="gender">
                    Gender*
                </label>
                <div className='radio-container'>
                    Male
                    <input type="radio"
                        name='gender'
                        value="male"
                        id="male"
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "male"}
                    />
                    Female
                    <input type="radio"
                        name='gender'
                        value="female"
                        id='female'
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "female"}
                    />
                    Other
                    <input type="radio"
                        name='gender'
                        value="other"
                        id='other'
                        onChange={(e) => setGender(e.target.value)}
                        checked={gender === "other"}
                    />
                </div>

            </div>
            <div className='input-subject'>
                <label htmlFor="subject">
                    Your Favourite Subject
                </label>
                <div className='checkbox-container'>
                    Maths
                    <input type="checkbox"
                        name="subject"
                        id='maths'
                        checked={subjects.math === true}
                        onChange={() => handleSubjectChange("math")}
                    />
                    English
                    <input type="checkbox"
                        name="subject"
                        id='english'
                        checked={subjects.english === true}
                        onChange={() => handleSubjectChange("english")}
                    />
                    Physics
                    <input type="checkbox"
                        name="subject"
                        id='physics'
                        checked={subjects.physics === true}
                        onChange={() => handleSubjectChange("physics")}
                    />
                </div>
            </div>
            <label htmlFor="resume">
                Upload Your Resume*
            </label>
            <input type="file"
                name="resume"
                placeholder='Upload a file'
                id='resume'
                onChange={(e) => setResume(e.target.files[0])}
                required
            />
            <label htmlFor="url">
                Url*
            </label>
            <input type="url"
                name="url"
                id='url'
                placeholder='Insert a URL'
                onChange={(e) => setUrl(e.target.value)}
                required
            />
            <label>Select your choice</label>
            <select
                name="select"
                id="select"
                value={selectedOption}
                onChange={(e) =>
                    setSelectedOption(
                        e.target.value
                    )
                }
            >
                <option
                    value=""
                    disabled
                    selected={selectedOption === ""}
                >
                    Select your Ans
                </option>
                <optgroup label="Beginers">
                    <option value="1">HTML</option>
                    <option value="2">CSS</option>
                    <option value="3">
                        JavaScript
                    </option>
                </optgroup>
                <optgroup label="Advance">
                    <option value="4">React</option>
                    <option value="5">Node</option>
                    <option value="6">
                        Express
                    </option>
                    <option value="t">
                        MongoDB
                    </option>
                </optgroup>
            </select>
            <label htmlFor="about">About</label>
            <textarea name="about"
                id="about"
                cols="30"
                rows="10"
                onChange={(e) => setAbout(e.target.value)}
                placeholder='Write something about you'
            ></textarea>
            <div className='button-container'>
                <button type="reset" className='reset-btn' onClick={handleReset}>Reset</button>
                <button type="submit" className='submit-btn'>Submit</button>
            </div>

        </form>
    </>)
}

export default Form