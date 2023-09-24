/** form submission 
 * 1. use form tag and onsubmit event handler(e) and get values from e like (e.target.email.value)
 * 2. controlled element  :   statefull form or controlled form  and show error if have( with indivisual state)
 * 3. uncontrolled element : using useRef() hook lets catches the refference a value (const ref = useRef(initialValue)) 
 * it returns an object with a singleProperty name current. when you need to setanything you have to use maintain sideEffect with useEffect hook
 * 4. use hook to handle states , submit and error. example react hook form.
 * 5. Reusable components
 */