import React from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from "@hookform/error-message";
import { UserService } from '../../services/UserService';

const AdminAddNewTeacher = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues:{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "GV",
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
                placeholder='Teacher Account'
                {...register('taiKhoan',{required: 'Teacher Account is required'})}
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
                placeholder='Teacher Password'
                {...register('matKhau',{required: 'Teacher Password is required'})}
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
                placeholder='Teacher Fullname'
                {...register('hoTen',{required: 'Teacher Fullname is required'})}
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
                placeholder='Teacher Phone Number'
                {...register('soDT',{required: 'Teacher Phone Number is required'})}
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
                placeholder='Teacher Email'
                {...register('email',{required: 'Teacher Email is required'})}
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

export default AdminAddNewTeacher