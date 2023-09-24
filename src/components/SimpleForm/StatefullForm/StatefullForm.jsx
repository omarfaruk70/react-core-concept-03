import { useState } from "react";

const StatefullForm = () => {

    // all state 
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(password.length < 5){
            setError('password must be 6 charecter or longer')
        }else{
            setError('')
            // console.log('form submitted');
        }
    }
    const handleNamefield = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        // console.log(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNamefield} type="text" name="name" id="name" />
                <br />
                <input type="email" name="email" id="email" />
                <br />
                <input onChange={handlePassword} type="password" name="password" id="pasword" required />
                <br />
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefullForm;