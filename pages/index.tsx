import type { NextPage } from 'next'
import { useRef, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const inputElement = useRef(null);

  const { triggerAuthenticateUser, isAuthenticateUserLoading } = useAuth();
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  useEffect(() => {
    if (Cookies.get('l_auth')) {
      Cookies.remove('l_auth');
    }
  }, []);

  const _submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    triggerAuthenticateUser({ email, password });
  };

  return (
    <>
      <div className="flex min-h-full">
        <div className="relative flex-1 hidden w-0 lg:block">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center flex-1 h-screen sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="w-full max-w-sm mx-auto lg:w-96">
            <div>
              <h1 className="text-6xl font-bold tracking-tight text-indigo-500">DoCurator</h1>
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
            <div className="mt-8">
              <div className="mt-6">
                <form onSubmit={_submitHandler} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='juandelacruz@samplemail.com'
                        autoComplete="email"
                        disabled={isAuthenticateUserLoading}
                        required
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative mt-1">
                      <input
                        id="password"
                        name="password"
                        type='password'
                        placeholder={'●●●●●●●●●●●●●'}
                        autoComplete="current-password"
                        disabled={isAuthenticateUserLoading}
                        required
                        className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />

                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="w-4 h-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-500"
                      />
                      <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a href="#" className="font-medium text-indigo-500 hover:text-indigo-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <div className='py-8'>
                  <label>
                    New to DoCurator? <a onClick={() => router.push('/signup')} className="font-medium text-indigo-500 cursor-pointer hover:text-indigo-500">
                      Sign up here for free
                    </a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
