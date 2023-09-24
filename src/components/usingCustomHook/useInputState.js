// this is my first created custom hook
// hook is a function for reducing or repetating codes

import { useState } from "react"

// hooks name started with use.. like useState, useEffect, useRef etc...
const useInputState = (defaultValue = null) => {
    const [value, setValue] =  (defaultValue);

    const onChange = (e) =>{
        setValue(e.target)
    }
    // there are 2 types of return they are Return with array and return with array
    return [value, onChange]
}

export default useInputState