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
      <h1>Form master</h1>
     {/* <SimpleForm></SimpleForm> */}
     {/* <StatefullForm></StatefullForm> */}
     {/* <RefForm></RefForm> */}

     {/* using custom hook  */}
     {/* <HookForm></HookForm> */}

     <ReusableForm  handleSubmit={handleSignIn}>
      <h2>Please sign in </h2>
      <p>Keep sing in and keep rocking</p>
     </ReusableForm>
     <ReusableForm  handleSubmit={handleLogIn}>
      <h2>Log in</h2>
      <p>Log in right now</p>
     </ReusableForm>
      
    </>
  )
}

export default App
