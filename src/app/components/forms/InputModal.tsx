"use client";

import { InputProps } from '@/app/types/Index';
import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiOutlineCaretDown } from 'react-icons/ai';

export default function InputModal({id,
    label,
    type,
    placeholder,
    register,
    error,
    textarea = false,
    className = "input-register, my-2",
    options,
    value,
    onChange,
  }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    const handleTextareaInput = (
        event: React.ChangeEvent<HTMLTextAreaElement>
      ) => {
        const textarea = event.target;
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + "px";
      };

    const inputClassName = clsx(
        "w-full",
        "rounded-2xl",
        "border",
        {
          "border-red-500": error,
          "bg-red-200": error,
          "border-transparent": !error,
        },
        "input-modal",
        className
      );
    
      if (type === "select" && options) {
        return (
          <div className="mb-4">
            <label className="mb-2 block label-text" htmlFor={id}>
              {label}
            </label>
            <Listbox value={value} onChange={onChange}>
              <div className="relative">
                <Listbox.Button className={inputClassName}>
                  <div className="flex justify-between items-center">
                    <span className="block truncate">
                      {" "}
                      {
                        options.find((option) => option.value === value)?.label // find the matching object and display its label
                      }
                    </span>
                    <AiOutlineCaretDown className="absolute right-0 top-1/2 mr-4 -translate-y-1/2 transform" />
                  </div>
                </Listbox.Button>
                <Listbox.Options className="absolute w-full py-1 mt-2 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {options.map((option) => (
                    <Listbox.Option key={option.value} value={option.value}>
                      {({ selected, active }) => (
                        <div
                          className={`${
                            active && "text-primary bg-primary/30"
                          } cursor-default select-none relative py-2 pl-10 pr-4`}
                        >
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {option.label}
                          </span>
                          {selected && (
                            <span
                              className={`${
                                active ? "text-primary" : "text-primary"
                              } absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
          </div>
        );
      }

  return (
   <div className='mb-4'>
      <label className="mb-2 label-text hidden" htmlFor={id}>
        {label}
      </label>
       <div className="relative">
    {textarea ? (
          <textarea
            className={inputClassName}
            {...register}
            id={id}
            placeholder={placeholder}
            onInput={handleTextareaInput}
          />
        ) : (
          <>
            <input
              className={inputClassName}
              {...register}
              type={showPassword ? "text" : type}
              id={id}
              placeholder={placeholder}
            />
            {type === "password" && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 mr-4 -translate-y-1/2 transform"
              >
                {showPassword ? (
                  <AiFillEyeInvisible aria-label="Masquer le mot de passe" />
                ) : (
                  <AiFillEye aria-label="Afficher le mot de passe" />
                )}
              </button>
            )}
          </>
        )}
      </div>
              {error && <p className="mt-1 text-xs text-red-500">{error}
      </p>}
  </div>
  )
}