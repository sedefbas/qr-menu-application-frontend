import React from "react";

const Login = () => {
  return (
    <div className="max-h-screen">
      <section className="border-red-500 bg-gray-800 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg ">
          <div className=" px-5">
            <h2 className="text-2xl font-bold text-[#002D74]">Admin Giriş</h2>

            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Kullanıcı Adı:</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="kullanıcı ismini giriniz"
                  className="w-full px-4 py-3 rounded-lgmt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  autoComplete="on"
                  required
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <div className="text-right mt-2"></div>

              <button
                type="submit"
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
              >
                Giriş
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
