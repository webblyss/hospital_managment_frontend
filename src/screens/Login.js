import React from 'react';

function Login() {

    function handleLogin(event){
        event.preventDefault()

        // Handle login here

    }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-5">Login</h1>
        <form onSubmit={handleLogin} method='post'>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Username:</label>
            <input type="username" name="username" id="username" className="w-full border-gray-400 border-2 p-2 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
            <input type="password" name="password" id="password" className="w-full border-gray-400 border-2 p-2 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="text-center">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
