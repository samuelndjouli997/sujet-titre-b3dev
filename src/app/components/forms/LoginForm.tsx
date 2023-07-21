"use client"

import React from 'react'
import Input from './Input'
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const LoginFormSchema = z.object({
    email: z.string().email("Email invalide"),
    password: z.string().min(1, "Mot de passe requis"),
  });

  type LoginFormInputs = z.infer<typeof LoginFormSchema>;

const LoginForm = () => {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<LoginFormInputs>({
        resolver: zodResolver(LoginFormSchema),
      });

      const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        const { email, password } = data;
    
        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });
    
        if (result?.error) {
          toast.error(result.error);
          return;
        }
    
        toast.success("Connexion réussie");
        router.push("/dashboard");
        
      };

      
  return (
    <>
        {/* form */}
        <form className="space-y-8 w-full" onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="Email"
            register={register("email")}
            error={errors.email?.message}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Mot de passe"
            register={register("password")}
            error={errors.password?.message}
          />

          <button type='submit' className="btn rounded-xl bg-primary-green hover:bg-primary-dark-green transition-colors duration-500 font-jost text-white">
            Se connecter
          </button>

        </form>
    </>
  )
}

export default LoginForm