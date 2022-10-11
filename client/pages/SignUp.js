import React, { useRef, useState } from "react";
import Link from "next/link";
import { registerApi } from "../components/api";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const collegename = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { username, email, password, clgname: collegename };
    const user = await registerApi(data);
    console.log(user);
    if (user) {
      router.push("/Login");
    }
  };

  return (
    <>
      <div class="bg-white dark:bg-gray-900">
        <div class="flex justify-center h-screen">
          <div class="hidden bg-cover lg:block lg:w-2/3 bg-img">
            <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
              <div>
                <h2 class="text-7xl font-bold text-white font-serif">Byjus</h2>

                <p class="max-w-xl mt-3 text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div class="flex-1">
              <div class="text-center">
                <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">
                  Brand
                </h2>

                <p class="mt-3 text-gray-500 dark:text-gray-300">
                  Sign in to access your account
                </p>
              </div>

              <div class="mt-8">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                    >
                      Username
                    </label>
                    <input
                      ref={username}
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter your username"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                    <div className="mt-6">
                      <label
                        for="username"
                        class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                      >
                        Email Address
                      </label>

                      <input
                        ref={email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@example.com"
                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>

                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label
                        for="password"
                        class="text-sm text-gray-600 dark:text-gray-200"
                      >
                        Password
                      </label>
                    </div>

                    <input
                      ref={password}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Your Password"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div class="mt-6">
                    <div class="flex justify-between mb-2">
                      <label
                        for="collegename"
                        class="text-sm text-gray-600 dark:text-gray-200"
                      >
                        College Name
                      </label>
                    </div>

                    <input
                      ref={collegename}
                      type="text"
                      name="text"
                      id="collegename"
                      placeholder="Enter college name"
                      class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div class="mt-6">
                    <button class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Register
                    </button>
                  </div>
                </form>

                <p class="mt-6 text-sm text-center text-gray-400">
                  Don&#x27;t have an account yet?{" "}
                  <Link href="/Login">
                    <a class="text-blue-500 focus:outline-none focus:underline hover:underline">
                      Back to Login
                    </a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
