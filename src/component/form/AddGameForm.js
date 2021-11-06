//import {useState} from "react";
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCategories} from "../../store/actions/categoriesAction";
import {getConsoles} from "../../store/actions/consolesAction";
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

function AddGameForm(){
    const categories = useSelector(state => state.categories);
    const consoles = useSelector(state => state.consoles);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
        dispatch(getConsoles());
    }, [dispatch]);

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);

    const { width, height } = useWindowSize()

    let display = 'hidden'
    function leSubmit() {
        display = ''
        setTimeout(() => {
            display = 'hidden'
        }, 3000);
        console.log(display)
    }

    return (
        <div className="w-full max-w-xs mx-auto mt-2 text-left">
            <div className={`${display}`}>
                <Confetti
                    width={width}
                    height={height}
                    numberOfPieces={200}
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit, onError)} className="rounded-lg px-8 pt-6 pb-8 border-black border-2">
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input {...register("name")}
                       className="bg-black bg-opacity-0 shadow appearance-none border-black border-2 rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="picture">
                        Picture
                    </label>
                    <input {...register("picture")}
                        className="bg-black bg-opacity-0 shadow appearance-none border-black border-2 rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <input {...register("description")}
                           className="bg-black bg-opacity-0 shadow appearance-none border-black border-2 rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="console">
                        Console
                    </label>
                    <select {...register("console")}
                           className="bg-black bg-opacity-0 shadow appearance-none border-black border-2 rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    >
                    {consoles.consoles.map((console) => (
                        <option value={console.id}>{console.brand} - {console.label}</option>
                    ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <select {...register("category")}
                           className="bg-black bg-opacity-0 shadow appearance-none border-black border-2 rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    >
                    {categories.categories.map((category) => (
                        <option value={category.id}>{category.label}</option>
                    ))}
                    </select>
                </div>
                <div className={'text-center'}>
                    <button
                        className="border-black border-2 hover:border-green-500 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        type="submit"
                        onClick={leSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddGameForm
