"use client"
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type InputProps = {
  label: string;
  register: any;
  required: boolean;
  placeholder: string;
  type?: any;
  minLength?: number;
  pattern?: {
    value: RegExp;
    message: string;
  };
};

const forgotPassword: React.FC = () => {
  const Input: React.FC<InputProps> = ({
    label,
    register,
    required,
    placeholder,
    minLength,
    pattern,
    type
  }) => (
    <div>
      <label className="w-[100%]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`mb-4 p-2 w-full border ${errors[label] ? 'border-red-500' : 'border-gray-300'
          } rounded`}
        {...register(label, { required, minLength, pattern })}
      />
      {errors[label] && (
        <span className="text-red-500">This field is required</span>
      )}
    </div>
  );
  type FormData = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <form
      className="max-w-md mx-auto my-10 p-6 bg-white rounded shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Register</h2>
      <Input
        placeholder="email"
        label="email"
        type={"email"}
        minLength={3}
        pattern={{
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address',
        }}
        register={register}
        required={true}
      />
      <Link href="/">
        <span>login</span>
      </Link>
      <input type="Forgot Password" />
    </form>
  );
};

export default forgotPassword;
