
import { useState, useEffect } from "react"


const Profile = ({user, setUser}) => {

const [passwordHash, setPasswordHash] = useState("initialPassword")



useEffect(() => {

        const fetchData = async () => {
        
                //http://localhost/user/:id
                const res = await fetch(`http://localhost/user/${user.id}`, 
                    {
                        "method" : "GET",
                        "mode" : "cors",
                        "headers" : {
                            "Content-Type" : "application/json"
                        }
                        
                    }
                )
                const data = await res.json();
                console.log("carrot")
                console.log(data)
                setPasswordHash(data.msg.passwordHash)

                
            }
            if (user){
                try{
                    fetchData()
                    
                } catch(error){
                    console.log(error, "didn't fetch data")
                }
                }

            },

    [user, passwordHash])

return (
    <>
  
    <h2>{user ? `Welcome ${user.username}`: ""}</h2>
    <h2>{user ? passwordHash : ""}</h2>
    <h2>{ user ? "" : "Not logged in" } </h2>
    </>
  
    )
};


export default Profile;