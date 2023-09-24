// #what is the context api ?
// context api holo emon ekta system jeta kono root component theke without props 
// any child component e data send korte pare and 
// child component e data access korte pare also update korte pare (through state)


// #why we will use context api ?
// amra normally kono root component e data rekhe ta jodi nested component theke access korte chai 
// tahole oi data k nested component e props hisabe pathaite hoito. 
// ete root component theke child component e jaoyar jnno majher sub component gula te props ta drilling kora lagto.
// but Context api use korar karone just main component e create korbo and jeikono component e ta  access korte parbo


// // steps
// 1. create a context with createContext and export it
//  like: export const MoneyContext = createContext() 
// 2. add provider for the context with a value ... here value could be anything (num, str, array, obj, function, etc)
// like ; <MoneyContext.provider> ......... main code .... <MoneyContext.provider/>;
// 3. useContext to access value in the context api. (child context er vitor e )
// like: const money = useContext(MoneyContext)