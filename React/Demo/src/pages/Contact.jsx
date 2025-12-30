import React, { useState } from "react";
const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [messege, setMessege] = useState("");
  const [IsLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setFullName("");
    setEmail("");
    setMessege("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = {
        fullName,
        email,
        messege,
      };
      console.log(data);
    } catch (error) {
      console.log(error.messege);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };
  return (
    <>
      <div>
        <h1>Contact Us</h1>
        <form
          className="text-center"
          onReset={handleClearForm}
          onSubmit={handleSubmit}
        >
          <div className="d-flex gap-2 text-amber-50">
            <label htmlFor="fullName" className="form-label text-amber-50">
              Fullname
            </label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Entere your name"
              className="text-primary form-control"
              required
            />
          </div>
          <div className="d-flex gap-2">
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Entere your email"
              className="text-primary form-control"
              required
            />
          </div>
          <div className="d-flex gap-2">
            <label htmlFor="messege">messege</label>
            <textarea
              name="messege"
              value={messege}
              onChange={(event) => setMessege(event.target.value)}
              placeholder="Entere your messege"
              className="text-primary form-control"
              required
            ></textarea>
          </div>
          <button type="reset" className="btn  btn-warning">
            Reset
          </button>
          <button type="submit" className="btn btn-success">
            {IsLoading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};
export default Contact;
