import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setemail] = useState([]);
  const [password, setpassword] = useState([]);

  const onsubmitdata = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Plz fillout all the details");
    }
    
    let registeruser = JSON.parse(localStorage.getItem('enteruser'));
    let maindata = registeruser.find((registeruser) => registeruser.email === email && registeruser.password === password)

    if (maindata) {
      alert("Sucessfully register user");
      navigate("/home")
    }
    if (!maindata) {
      alert("fillout currect details");
    }
  }

  return (
    <div className='mt-20' >
      <section>
        <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign in
              </h2>
              <p class="mt-2 text-sm text-gray-600">
                Don&#x27;t have an account?{" "}
                <Link
                  to="/"
                  title=""
                  class="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
              <form action="#" method="POST" class="mt-8" onSubmit={onsubmitdata} >
                <div class="space-y-5">
                  <div>
                    <label for="" class="text-base font-medium text-gray-900">
                      {" "}
                      Email address{" "}
                    </label>
                    <div class="mt-2">
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <div class="flex items-center justify-between">
                      <label for="" class="text-base font-medium text-gray-900">
                        {" "}
                        Password{" "}
                      </label>
                      <a
                        href="#"
                        title=""
                        class="text-sm font-semibold text-black hover:underline"
                      >
                        {" "}
                        Forgot password?{" "}
                      </a>
                    </div>
                    <div class="mt-2">
                      <input
                        class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    >
                      Get started{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="ml-2"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="h-[90%] mt-10 w-[90%]">
            <img
              class="mx-auto h-full w-full rounded-md object-cover"
              src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1740&amp;q=80"
              alt=""
            />
          </div>
        </div>
      </section>

    </div>
  )
}



