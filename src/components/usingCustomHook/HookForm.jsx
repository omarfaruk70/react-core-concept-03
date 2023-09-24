import useInputState from "./useInputState";

const HookForm = () => {
    // creat a function for submitting form
    const handleSubmit = (e) => {
        const [name, handleNameChange] = useInputState('')
       e.preventDefault()
       console.log('form data is ', name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}  type="text" name="name" id="name" />
                <br />
                <input type="email" name="email" id="email" />
                <br />
                <input type="password" name="password" id="pasword" required />
                <br />
                <input type="submit" value="submit" />
               
            </form>
        </div>
    );
};

export default HookForm;