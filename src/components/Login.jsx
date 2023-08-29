import { UserAuth } from "../context/AuthContext"

const Login = () => {

  const { googleSignIn, user, logout} = UserAuth()
  return (
    <div className=" flex items-center flex-col">
      <h3 className="font-semibold text-lg">Login</h3>

      

      {user ? (
        <button onClick={logout} className="bg-blue-600 text-white py-1 px-4 rounded-md mt-3">
          Logout
        </button>
      ) : (
        <button onClick={googleSignIn} className="bg-blue-600 text-white py-1 px-4 rounded-md mt-3">
          Google Login
        </button>
      )}
    </div>
  )
}

export default Login