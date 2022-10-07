import {useEffect, useState} from "react";


function FetchSample() {

  const[userData, setUserData] = useState({});

  useEffect(()=> {
    const url = "https://api.github.com/users/tedhagos";
    fetch(url)
        .then(res => res.json())
        .then(data =>  setUserData(data));

  },[])

  return(
      <div>
        <h1>Fetch Sample</h1>
        <div>
          <GitHubUser
            name = {userData.name}
            id = {userData.id}
            bio = {userData.bio}
          />
          <pre>
            {JSON.stringify(userData, null, 2)}
          </pre>
        </div>
      </div>
  )
}

function GitHubUser({name, id, bio}) {
  return(
      <div className="card">
        <div className="card-body">
          <h3>{name}</h3>
           <h4>{id}</h4>
          <p>{bio}</p>
        </div>
      </div>
  )
}
export default FetchSample;
