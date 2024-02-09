import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { UserService } from '../../services/UserService';

const AdminAddNewStudent = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues:{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
            email: ""
        },
        mode: 'onChange'
    })

    const onSubmit = (data, {resetForm}) =>{
        UserService.addNewUser(data)
        .then((result) => {

            window.location.href = 'http://localhost:3000/admin/qlgv'
        }).catch((err) => {

        });
    }


  return (
    <div className='container mx-auto'>
        <h2 className='font-bold text-2xl '>Add new Teacher Account</h2>

        <form onSubmit={handleSubmit(onSubmit)} className='my-3 space-y-5'>
            <input 
                type="text"
                className='font-bold text-base p-3 border border-black w-full'
                placeholder='Student Account'
                {...register('taiKhoan',{required: 'Student Account is required'})}
                 />
            <ErrorMessage
            errors={errors}
            name="taiKhoan"
            render={({ message }) => {
                return (
                <p className="font-normal inline text-sm text-red-500">{message}</p>
                );
            }}
            />

            <input 
                type="password"
                className='font-bold text-base p-3 border border-black w-full'
                placeholder='Student Password'
                {...register('matKhau',{required: 'Student Password is required'})}
                 />
            <ErrorMessage
            errors={errors}
            name="matKhau"
            render={({ message }) => {
                return (
                <p className="font-normal inline text-sm text-red-500">{message}</p>
                );
            }}
            />

            <input 
                type="text"
                className='font-bold text-base p-3 border border-black w-full'
                placeholder='Student Fullname'
                {...register('hoTen',{required: 'Student Fullname is required'})}
                 />
            <ErrorMessage
            errors={errors}
            name="hoTen"
            render={({ message }) => {
                return (
                <p className="font-normal inline text-sm text-red-500">{message}</p>
                );
            }}
            />
            
            <input 
                type="text"
                className='font-bold text-base p-3 border border-black w-full'
                placeholder='Student Phone Number'
                {...register('soDT',{required: 'Student Phone Number is required',
                    pattern:{
                        value: /^[0-9\+]{1,}[0-9\-]{3,15}$/,
                        message: "Student Phone number is not valid"
                    }})}
                 />
            <ErrorMessage
            errors={errors}
            name="soDT"
            render={({ message }) => {
                return (
                <p className="font-normal inline text-sm text-red-500">{message}</p>
                );
            }}
            />
            
            <input 
                type="email"
                className='font-bold text-base p-3 border border-black w-full'
                placeholder='Student Email'
                {...register('email',{required: 'Student Email is required',
                    pattern:{
                        value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Email is not valid !!!",
                    }})}
                 />

            <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => {
                return (
                <p className="font-normal inline text-sm text-red-500">{message}</p>
                );
            }}
            />
            
            <button type='submit' className='p-3 w-full bg-black font-bold text-base text-center text-white'>Submit</button>
        </form>
    </div>
  )
}

export default AdminAddNewStudent