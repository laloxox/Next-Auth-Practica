import { getSession, signOut } from 'next-auth/react'



  function HomePage({session}) {

      return (
      <div>

        {  
          session ? (

            <div>
            <h1>{session.user.name}</h1>
            <p>{session.user.email}</p>
            <img src={session.user.image} alt=""></img>
            </div>

          ) : (
            <p>Skeleton</p>
          )
        
        }
        <button onClick={() => signOut()}>
          Logout
        </button>
    
      </div>

    );
  }

  export const getServerSideProps = async (context) => {

    const session = await getSession(context)

    if (!session) return { 
      redirect: {
        destination: '/login',
        permanent: false
      }
    }

    return {
      props: {
        session
      }
    }
  }

  export default HomePage;






   // const {data: session, status} = useSession()
    // const router = useRouter()
      

    //   if (status === 'loading') {
    //     return <p>Loading...</p>
    //   }

    //   if (status === 'unauthenticated') {
    //     router.push('/login')
    //   }






  //La misma forma de hacerlo pero en el backend

  // export const getServerSideProps = async (context) => {

  //   const session = await getSession(context);

  //   return {
  //     props: {
  //       session: session,
  //     },
  //   };

  // };


    //////////Manera de hacerlo con el uso de useEffect////

    //const [user, setUser] = useState(null)
  // useEffect(() => {
    // (async() => {
      // const session = await getSession()
        //console.log(session);
        //setUser(session.user)
      //})();
    //}, [])