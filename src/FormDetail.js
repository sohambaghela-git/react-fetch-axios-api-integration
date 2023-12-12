import { useState } from "react";

const FormDetail = () => {
    const [formData, setFormData] = useState({})
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      formSubmit();
    };

    const formSubmit = () => {
      fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
        })
      })
      .then(res => res.json())
      .then(console.log);
    }
  
    return(
      <div>
        <h2>Basic Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
            />
            </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
};

export default FormDetail;