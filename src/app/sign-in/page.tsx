"use client";

import { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";

export default function SignIn() {
  const [log, setLog] = useState(false);
  const [providers, setProviders] = useState<Record<string, any>>()

  useEffect(() => {
    const fetchProviders = async () => {
      const res:any = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { first_name, last_name, email, password, password_confirmation } =
      event.target.elements;

    if (!log) {
      if (password.value !== password_confirmation.value) {
        alert("Passwords do not match!");
        return;
      }
      const result = await signIn("credentials", {
        redirect: false,
        email: email.value,
        password: password.value,
      });

      if (!result.error) {
        window.location.href = "/";
      } else {
        alert("Failed to sign in");
      }
    } else {
      const result = await signIn("credentials", {
        redirect: false,
        email: email.value,
        password: password.value,
      });

      if (!result.error) {
        // Handle successful sign-in, e.g., redirect to the home page
        window.location.href = "/";
      } else {
        alert("Failed to sign in");
      }
    }
  };

  if (!providers) return null; // or some loading indicator

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="bg-white overflow-hidden">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12 overflow-hidden">
          <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 overflow-hidden">
            <img
              alt="image of a login page"
              src="login_page.png"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </aside>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 overflow-hidden">
            <div className="max-w-xl lg:max-w-3xl">
              <a className="block text-blue-600" href="#">
                <span className="sr-only">Home</span>
                <img className="h-10 sm:h-16" src="logo.png" />
              </a>

              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Neighbourly
              </h1>

              <p className="mt-4 leading-relaxed text-2xl text-gray-500">
                Get Started!
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                {!log && (
                  <>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="FirstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>

                      <input
                        type="text"
                        id="FirstName"
                        name="first_name"
                        className="mt-1 w-full rounded-md h-9 border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                        required={!log}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="LastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>

                      <input
                        type="text"
                        id="LastName"
                        name="last_name"
                        className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                        required={!log}
                      />
                    </div>
                  </>
                )}

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                    required
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                    required
                  />
                </div>

                {!log && (
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="PasswordConfirmation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password Confirmation
                    </label>

                    <input
                      type="password"
                      id="PasswordConfirmation"
                      name="password_confirmation"
                      className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-md text-gray-700 shadow-sm"
                      required
                    />
                  </div>
                )}

                <div className="col-span-6 sm:flex flex-col sm:items-center sm:gap-4">
                  <button
                    type="submit"
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    {!log ? "Create an account" : "Log in"}
                  </button>

                  {!log && (
                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                      Already have an account?
                      <a
                        onClick={() => setLog(!log)}
                        href="#"
                        className="text-gray-700 underline ml-2"
                      >
                        Log in
                      </a>
                    </p>
                  )}

                  {providers && providers.google && (
                    <button
                      type="button"
                      onClick={() => signIn(providers.google.id)}
                      className="flex items-center justify-center sm:w-1/2 mt-2 p-2 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-100"
                    >
                      <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Google logo"
                        className="w-6 h-6 mr-2"
                      />
                      <span className="text-gray-700 font-medium">
                        Sign in with Google
                      </span>
                    </button>
                  )}
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </main>
  );
}
