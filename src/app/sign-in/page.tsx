"use client";

import { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signSchema } from "@/schema/signSchema";



export default function SignIn() {
  const [providers, setProviders] = useState<Record<string, any>>();

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  const form = useForm({
    resolver: zodResolver(signSchema),
    defaultValues: {
      email: "",
      password: "",
      password_confirmation: "",
    },
  });

    type Values = {
      email: string;
      password: string;
    };

  const onSubmit = async (values: Values): Promise<void> => {
    const { email, password } = values;
    console.log(values);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result.error) {
      window.location.href = "/";
    } else {
      alert("Failed to sign in");
    }
  };

  if (!providers) return null;

  return (
    <>
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

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="********"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password_confirmation"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="********"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
                {providers && providers.google && (
                  <button
                    type="button"
                    onClick={
                      () =>  {
                          signIn(providers.google.id);
                          window.location.href = '/';
                      }
                      
                    }
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
            </main>
          </div>
        </section>
      </main>
    </>
  );
}
