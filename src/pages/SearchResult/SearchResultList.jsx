import React, { useRef, useState } from "react";
import { Rate } from "antd";
import { useSignalEffect } from "@preact/signals-react/runtime";
import { Link } from "react-router-dom";
import EndOfList from "../../components/EndOfList";

const SearchResultList = ({searchData,searchKey,dataModify}) => {
  let { items, currentPage, totalPages } = searchData;
  const [dataCustom,setDataCustom] = useState(1)

  return (
    <>
        <div className="my-3 mx-4 w-full">
            <ul>
                {items && items.length > 0
                ? items.map((item) => {
                    const {
                        maKhoaHoc,
                        tenKhoaHoc,
                        moTa,
                        nguoiTao,
                        luotXem,
                        hinhAnh,
                    } = item;
                    const searchKeyItem = maKhoaHoc + "searchKeyItem";
                    return (
                        <li className="mb-4" key={searchKeyItem}>
                        <div className="flex justify-between items-center border-b pb-4">
                            <Link to={`/detail/${maKhoaHoc}`} className='list_data_img'
                            style={{
                                backgroundImage: `url(${hinhAnh})`,
                            }}></Link>
                            <div className="mx-3 font-bold text-lg w-2/3">
                                <Link to={`/detail/${maKhoaHoc}`}>
                                    <h2 className="mb-1 line-clamp-1">{tenKhoaHoc}</h2>
                                </Link>
                                
                                <span className="font-normal text-base line-clamp-2">
                                    {moTa}
                                </span>
                                <p className="font-normal text-sm text-gray-500">
                                    {nguoiTao.hoTen}
                                </p>
                                <div className="flex items-center">
                                    <p className="font-semibold text-base text-amber-900">
                                    4.3
                                    </p>
                                    <Rate
                                    allowHalf
                                    defaultValue={4.3}
                                    className="mx-1 text-sm space-x-0.5"
                                    />
                                    <span className="font-medium text-sm">({luotXem})</span>
                                </div>
                                <p className="font-normal text-sm text-gray-500">
                                    22 total hours &#8226; 156 lectures &#8226; All level
                                </p>
                            </div>
                            <p className="font-bold text-lg">đ1,960,000</p>
                        </div>
                        </li>
                    );
                    })
                : <EndOfList/>}
            </ul>
            <div className="flex w-full items-center justify-end text-right py-2">
                {
                    currentPage != 1 ? (
                        <button className=" px-3 py-2 text-base font-bold " onClick={() =>{
                            let previous = dataCustom - 1
                            setDataCustom(previous)
                            dataModify(previous)
                        }}>
                            <i className="fa-solid fa-angles-left"></i>
                        </button>
                    ) : null
                }
                

                <p className=" mx-2 px-3 py-2 text-base font-bold border-2 rounded border-black">
                    {dataCustom}
                </p>

                {
                    currentPage != totalPages ? (
                        <button className=" px-3 py-2 text-base font-bold " onClick={() =>{
                            let next = dataCustom + 1
                            setDataCustom(next)
                            dataModify(next)
                        }}>
                            <i className="fa-solid fa-angles-right"></i>
                        </button>
                    ) : null
                }
                
            </div>
            <div className="my-2 font-bold text-lg">
                <h2>
                Related search{" "}
                <i className="fa-solid fa-circle-exclamation text-base ms-2"></i>
                </h2>
                <ul className="md:flex items-center text-base text-white my-1 space-x-3 sm:grid sm:grid-cols-3 sm:space-y-2">
                <li className="px-4 py-2 bg-black rounded-full">
                    <p className="m-0 p-0 leading-6">python for beginner</p>
                </li>
                <li className="px-4 py-2 bg-black rounded-full">
                    <p className="m-0 p-0 leading-6">python for beginner</p>
                </li>
                <li className="px-4 py-2 bg-black rounded-full">
                    <p className="m-0 p-0 leading-6">python for beginner</p>
                </li>
                <li className="px-4 py-2 bg-black rounded-full">
                    <p className="m-0 p-0 leading-6">python for beginner</p>
                </li>
                </ul>
            </div>
    </div>
    </>
    
  );
};

export default SearchResultList;
