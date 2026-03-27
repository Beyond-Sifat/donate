import { useState } from "react";

const Register = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        return newErrors;
    };

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
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

                {/* Name */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full border p-2 mb-1 rounded"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mb-2">{errors.name}</p>
                )}

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-2 mb-1 rounded"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm mb-2">{errors.email}</p>
                )}

                {/* Password */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border p-2 mb-1 rounded"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm mb-3">{errors.password}</p>
                )}

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Register;
