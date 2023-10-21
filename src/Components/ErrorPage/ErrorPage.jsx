import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="lg:w-[800px] w-[500px] lg:h-[500px] h-[300px] lg:mt-[100px] mt-[200px] flex justify-center items-center bg-blue-200 mx-auto rounded-3xl text-4xl font-extrabold text-black gap-12">
            <h2 className="">Page Not Found</h2>
            <NavLink to='/'><button className="bg-red-600 rounded-xl text-lg font-medium p-4 text-white border shadow-xl">Go Back</button></NavLink>
        </div>
    );
};

export default ErrorPage;