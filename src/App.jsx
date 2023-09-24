import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
// import RefForm from './components/RefForm/RefForm'
// import HookForm from './components/usingCustomHook/HookForm'
// import StatefullForm from './components/SimpleForm/StatefullForm/StatefullForm'
// import SimpleForm from './components/simpleForm/simpleForm'
function App() {
  const handleSignIn = (data) =>{
    console.log('submit data is', data);

  }
 const handleLogIn = (data) =>{
  console.log('login data id ', data);
}
  return (
    <>
      <h1>Vite + React</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefullForm></StatefullForm> */}
     {/* <RefForm></RefForm> */}

     {/* using custom hook  */}
     {/* <HookForm></HookForm> */}

     <ReusableForm formTitle='Sign In' submitBtnText='Sign In' handleSubmit={handleSignIn}></ReusableForm>
     <ReusableForm formTitle='Log In' submitBtnText='LogIn' handleSubmit={handleLogIn}></ReusableForm>
      
    </>
  )
}

export default App
