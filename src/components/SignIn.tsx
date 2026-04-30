"use client";
import { Lock, Mail, User } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Invalid email format" })
    .toLowerCase()
    .trim(),
  password: z
    .string()
    .min(6, { message: "password must have atleast 6 characters" })
    .max(8, { message: "password must not exceed 8 characters" }),
});

export const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { isSubmitSuccessful },
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });
  const submitData: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch("http://localhost:4000/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log(result);
      if (!res.ok) {
        setError("root", {
          type: "server",
          message: result.message || "Something went wrong",
        });
        return;
      }
      router.replace("/landingpage");
    } catch (error) {
      setError("root", { message: "Network connection failed" });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="flex flex-col justify-center gap-4 rounded-4xl px-2 pb-4">
      <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col just-center gap-4 bg-white text-black max-w-110 rounded-2xl pb-4"
      >
        {errors.root && <p style={{ color: "red" }}>{errors.root.message}</p>}
        <div>
          <p className="text-center text-2xl py-2">Sign In</p>
          <p className="text-center py-1 text-gray-500">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="px-4">
          <p className="flex flex-row items-center gap-2 py-1">
            <Mail size={18} />
            <span>Email</span>
          </p>
          <input
            className="w-full py-1 rounded-2xl px-4 outline-gray-500"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
          />
          {errors.email?.message && (
            <span className="text-red-500">{errors.email?.message}</span>
          )}
        </div>
        <div className="px-4">
          <p className="flex flex-row items-center gap-2 py-1">
            <Lock size={18} />
            <span>Password</span>
          </p>
          <input
            className="w-full py-1 rounded-2xl px-4 outline-gray-500"
            type="password"
            placeholder="Enter your password"
            {...register("password")}
          />
          {errors.password?.message && (
            <span className="text-red-500">{errors.password?.message}</span>
          )}
        </div>
        <button className="flex flex-row justify-center gap-2 w-[90%] mx-auto py-1  rounded-xl text-white bg-green-600 transition duration-300 hover:scale-105 hover:bg-green-500">
          <User size={20} className="pt-1" />
          <span>Sign In</span>
        </button>
        <div className=" text-center">
          <Link
            href={"/"}
            className="text-green-600 hover:border-b hover:border-b-green-400"
          >
            Forget your password?
          </Link>
        </div>
        <div className="text-center relative center-div py-3">
          <p className="w-full border-t border-t-gray-500"></p>
          <span className="bg-white text-gray-500  px-2 absolute top-0">
            Don't have an account?
          </span>
        </div>
        <Link
          className="text-center border text-green-500 border-green-400 border-2 w-[90%] py-1 rounded-xl transition duration-300 hover:scale-105 hover:text-black mx-auto"
          href="/register"
        >
          Create New Account
        </Link>
      </form>
      <section className=" max-w-110 items-center  py-2 flex flex-col rounded-xl text-sm bg-gray-700/20 shadow-2xl justify-center">
        <p>Demo Credentials:</p>
        <span>Email: demo@quizlet.com</span>
        <span>Password: demo123</span>
      </section>
    </div>
  );
};
