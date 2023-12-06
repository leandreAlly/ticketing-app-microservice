import { useState, useEffect } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

const NewTicket = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);

  const { doRequest, errors } = useRequest({
    url: "/api/tickets",
    method: "post",
    body: { title, price },

    onSuccess: () => Router.push("/"),
  });

  useEffect(() => {
    setError(errors);

    const timer = setTimeout(() => {
      setError(null);
      setPrice("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [errors]);

  const onBlur = () => {
    const value = parseFloat(price);

    if (isNaN(value)) return;

    setPrice(value.toFixed(2));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    doRequest();
  };
  return (
    <div>
      <h1>Create a Ticket</h1>
      {error}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mt-2">
          <label>Price</label>
          <input
            value={price}
            onBlur={onBlur}
            onChange={(e) => setPrice(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

export default NewTicket;
