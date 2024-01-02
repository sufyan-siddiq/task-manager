'use client'
import Link from 'next/link';
import React from 'react'
import { useForm } from "react-hook-form";

const Register = () => {
  const Input = ({ label, register, required, placeholder, minLength }: any) => (
    <div >
      <label className='w-[100%]'>{label}</label>
      <input
        placeholder={placeholder}
        className={`mb-4 p-2 w-full border ${errors[label] ? 'border-red-500' : 'border-gray-300'} rounded`}
        {...register(label, { required: required, minLength: minLength })} />
      {errors[label] && <span className="text-red-500">This field is required</span>}
    </div>
  );

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: ' ',
      email: '',
      password: '',
      confirmPassword: '',
      number: '',
    }
  })
  const onSubmit = (data: any) => console.log(data);
  return (
    <form className="max-w-md mx-auto my-10 p-6 bg-white rounded shadow-md" onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>
      <Input
        placeholder='name'
        label="name"
        minLength={3}
        register={register}
        required={true}
      />
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
      <Input
        placeholder='password'
        label="password"
        minLength={6}
        register={register}
        required={true}
      />
      <Input
        placeholder='confirmPassword'
        label="confirmPassword"
        minLength={6}
        register={register}
        required={true}
      />
      <Input
        placeholder='number'
        label="number"
        minLength={3}
        register={register}
        required={true}
      />
      <Link href="/">
        <span>login</span>
      </Link>
      <input type="Register" />
    </form>
  )
}
export default Register;