import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    qualification: "",
    percentage: "",
    course: "",
    batch: [],
    address: "",
    pin: "",
    city: "",
    guardianName: "",
    guardianMobile: "",
    reference: "",
    requirements: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValError] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        batch: checked
          ? [...prev.batch, value]
          : prev.batch.filter((b) => b !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validate = () => {
    let Error = {};

    if (formData.fullName.length < 3) {
      Error.fullName = "Name should be more than 3 characters";
    } else if (!/^[A-Za-z ]+$/.test(formData.fullName)) {
      Error.fullName = "Only letters and space allowed";
    }

    setValError(Error);

    return Object.keys(Error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the form correctly");
      return;
    }

    try {
      console.log(formData);
      toast.success("Registration Successful");
      handleClearForm();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      email: "",
      mobile: "",
      dob: "",
      qualification: "",
      percentage: "",
      course: "",
      batch: [],
      address: "",
      pin: "",
      city: "",
      guardianName: "",
      guardianMobile: "",
      reference: "",
      requirements: "",
    });
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Register;

