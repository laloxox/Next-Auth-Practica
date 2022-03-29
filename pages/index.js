import {getSession} from 'next-auth/react';
import {useEffect, useState} from 'react';



function HomePage() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    (async() => {
      const session = await getSession()
      console.log(session);
      setUser(session.user)
    })();
  }, [])


  return (
    <div>

      {JSON.stringify(user)}

      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <img src={user.image} alt=""></img>

    </div>
  );
}

export default HomePage;