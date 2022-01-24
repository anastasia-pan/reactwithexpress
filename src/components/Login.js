import {useState} from "react"


function Login(user, setUser) {
    const [userName, setUserName] = useState("") 
    const [password, setPassword] = useState("")

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return(
        <>
        <h1>Login</h1>;
        <form onSubmit={handleSubmit}>
            <label htmlFor="user">User: </label>
            <input type="text" name="user" value={userName} onChange={handleUserName}/>

            <label htmlFor="password">User: </label>
            <input type="password" name="password" value={password} onChange={handlePassword}/>

            <input type="submit" value="Submit"/>
        </form>
        </>
        
    );
}

export default Login;