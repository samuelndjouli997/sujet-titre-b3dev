"use client"

import React from 'react'
import Input from './Input'
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation'

const RegisterFormSchema = z.object({
    name: z.string().min(1, "Nom requis"),
    email: z.string().email({ message: "Email invalide" }),
    password: z.string().min(1, { message: "Mot de passe requis" }),
    role: z.enum(["BUYER", "SELLER", "BOTH"]),
    });
  
    type RegisterFormInputs = z.infer<typeof RegisterFormSchema>;

const RegisterForm = () => {
    const router = useRouter();

    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm<RegisterFormInputs>({
      resolver: zodResolver(RegisterFormSchema),
    });
  
    const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const result = await res.json();
  
      if (result?.error) {
        toast.error(result.error);
        return;
      } else {
        toast.success("Inscription réussie");
        await signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        });
        router.push('/home');
      }
    };

  return (
    <>
        {/* form */}
        <form className="space-y-8 w-full" onSubmit={handleSubmit(onSubmit)}>
           
                    <Input
                        id="name"
                        type="text"
                        label="Nom"
                        placeholder="Nom"
                        register={register("name")}
                        error={errors.name?.message}
                    />
                  

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
              
              <Controller
                control={control}
                name="role"
                defaultValue="BUYER"
                render={({ field }: any) => (
                  <Input
                    id="role"
                    type="select"
                    label="Role"
                    options={[
                      { value: "BUYER", label: "Acheteur" },
                      { value: "SELLER", label: "Vendeur" },
                      { value: "BOTH", label: "Les deux" },
                    ]}
                    {...field}
                    error={errors.role?.message}
                  />
                )}
              />

              <button type='submit' className="btn rounded-xl bg-primary-green hover:bg-primary-dark-green transition-colors duration-500 font-jost text-white">
                C'est parti !
              </button>

            </form>
    </>
  )
}

export default RegisterForm