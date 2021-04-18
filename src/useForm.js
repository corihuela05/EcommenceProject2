import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let userType;

        switch (values.email) {
            case "admin@admin.com":
                userType = "admin";
                break;
            case "buyer@buyer.com":
                userType = "buyer";
                break;
            case "nonprofit@nonprofit.com":
                userType = "nonprofit";
                break;
            case "seller@seller.com":
                userType = "seller";
                break;    
            default:
                break;
        }

        localStorage.setItem("userType", userType);

        setErrors(validate(values));
        setIsSubmitting(true);
        // Store the user type in local storage
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    return { handleChange, handleSubmit, values, errors };
};

export default useForm;
