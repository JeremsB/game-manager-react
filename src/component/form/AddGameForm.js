//import {useState} from "react";
import { useForm } from "react-hook-form";

function AddGameForm(){
    /*const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    const [description, setDescription] = useState("");*/
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => console.log(data, e);
    const onError = (errors, e) => console.log(errors, e);

    return (
        <div className="w-full max-w-xs mx-auto mt-2 text-left">
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

                <div className={'text-center'}>
                    <button
                        className="border-black border-2 hover:border-green-500 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        type="button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddGameForm
