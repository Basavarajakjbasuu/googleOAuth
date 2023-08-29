import { UserAuth } from "../context/AuthContext";

const Profile = () => {

  const { user, logout } = UserAuth()

  return (
    <div>
      <div 
        className="
          bg-white
          w-[350px]
          p-4
          rounded-md
          shadow-xl
          m-auto
          flex
          items-center
          justify-center
          flex-col
          z-10
          mt-28
        "
      >
        {user && (
          <>
            <div className="w-24 h-24 bg-gray-500 rounded-full">
              <img src={ user?.photoURL} alt="user-image" className="rounded-full" />  
            </div>
        
            <h3 
              className="
                mt-2
                pb-2
                text-lg
                border-b-[1px]
                border-gray-600
                w-full
                text-center
              ">
              Welcome <span className="font-bold">{user?.displayName}</span>
            </h3>

            <p className="mt-2">
              Email: <span className="font-bold">{user?.email}</span>
            </p>

            <button
              onClick={logout}
              className="
                bg-blue-400
                text-white
                p-2
                mt-3
                px-4
                rounded-3xl
                opacity-80
                hover:opacity-100
              ">
              Logout
            </button>
          </> 
        )}
      </div>
    </div>
  )
}

export default Profile