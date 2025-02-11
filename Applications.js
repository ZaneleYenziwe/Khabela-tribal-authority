import React, { useState } from 'react';

const AdmissionForm = () => {
  const [form, setForm] = useState({
    learnerDetails: '',
    schoolResults: null,
    status: 'pending',
    parentDetails: '',
    parentDocuments: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Admission Form</h1>
      
      <div>
        <label> Learner Details:
          <textarea name="learnerDetails" value={form.learnerDetails} onChange={handleChange} />
        </label>
      </div>
      
      <div>
        <label> Upload Latest School Results:
          <input type="file" name="schoolResults" onChange={handleChange} />
        </label>
      </div>
      
      <div>
        <label> Status:
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="awaiting-registration">Awaiting Registration</option>
          </select>
        </label>
      </div>
      
      <div>
        <label> Parent Details:
          <textarea name="parentDetails" value={form.parentDetails} onChange={handleChange} />
        </label>
      </div>
      
      <div>
        <label> Upload Parent Documents:
          <input type="file" name="parentDocuments" onChange={handleChange} />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdmissionForm;
