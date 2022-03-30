import { getSession } from 'next-auth/react';




  function HomePage({ session }) {

    const {user} = session;

      return (
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <img src={user.image} alt=""></img>
      </div>
    );
  }
  

  export const getServerSideProps = async (context) => {

    const session = await getSession(context);

    return {
      props: {
        session: session,
      },
    };

  };

  export default HomePage;


  
    //////////Manera de hacerlo con el uso de useEffect////

    //const [user, setUser] = useState(null)
  // useEffect(() => {
    // (async() => {
      // const session = await getSession()
        //console.log(session);
        //setUser(session.user)
      //})();
    //}, [])