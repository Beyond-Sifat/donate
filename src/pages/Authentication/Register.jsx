import { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState("");
    // console.log(errors);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {

        if (!formData.name || !formData.email || !formData.password) {
            return "All fields are required";
        }
        if (!formData.email.includes("@")) {
            return "Invalid email";
        }
        // if (!formData.email) {
        //     return "Email is required";
        // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        //     return "Invalid email format";
        // }

        if (formData.password.length < 6) {
            return "Password must be at least 6 characters";
        }

        return "";
    };

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors("");
        const validationErrors = validate();

        if (validationErrors) {
            return setErrors(validationErrors);
        } else {
            setErrors("");
            console.log("Form Data:", formData);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md p-6 rounded w-[300px]"
            >
                <h2 className="text-xl font-bold mb-4 text-center">Simple Form</h2>
                {errors && <p className="text-red-500 text-sm mb-2">{errors}</p>}

                {/* Name */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full border p-2 mb-1 rounded"
                    value={formData.name}
                    onChange={handleChange}
                />
                {/* {errors && (
                    <p className="text-red-500 text-sm mb-2">{errors.name}</p>
                )} */}

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-2 mb-1 rounded"
                    value={formData.email}
                    onChange={handleChange}
                />
                {/* {errors.email && (
                    <p className="text-red-500 text-sm mb-2">{errors.email}</p>
                )} */}

                {/* Password */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border p-2 mb-1 rounded"
                    value={formData.password}
                    onChange={handleChange}
                />
                {/* {errors.password && (
                    <p className="text-red-500 text-sm mb-3">{errors.password}</p>
                )} */}

                <button
                    //type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
