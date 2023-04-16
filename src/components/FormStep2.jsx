function Step2({ formData, setFormData }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="form-control w-full">
        <label htmlFor="year" className="label">
          <span className="label-text">model year</span>
        </label>
        <select
          name="year"
          className="select select-bordered"
          value={formData.year}
          onChange={handleChange}
        >
          <option>select</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
          <option>2018</option>
          <option>2017</option>
        </select>
      </div>

      <div className="form-control w-full">
        <label htmlFor="make" className="label">
          <span className="label-text">make</span>
          {/* <span className="label-text-alt">ex. BMW</span> */}
        </label>
        <input
          type="text"
          name="make"
          placeholder="ex. BMW"
          className="input input-bordered"
          value={formData.make}
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="model" className="label">
          <span className="label-text">model</span>
          {/* <span className="label-text-alt">ex. 5 Series</span> */}
        </label>
        <input
          type="text"
          name="model"
          placeholder="ex. 5 Series"
          className="input input-bordered"
          value={formData.model}
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="trim" className="label">
          <span className="label-text">trim</span>
          {/* <span className="label-text-alt">ex. M550i</span> */}
        </label>
        <input
          type="text"
          name="trim"
          placeholder="ex. M550i"
          className="input input-bordered"
          value={formData.trim}
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="transmission" className="label">
          <span className="label-text">transmission</span>
          {/* <span className="label-text-alt">ex. 8 Speed Automatic</span> */}
        </label>
        <input
          type="text"
          name="transmission"
          placeholder="ex. 8 Speed Automatic"
          className="input input-bordered"
          value={formData.transmission}
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="engine" className="label">
          <span className="label-text">engine</span>
          {/* <span className="label-text-alt">ex. 4.4-liter Turbo V8</span> */}
        </label>
        <input
          type="text"
          name="engine"
          placeholder="ex. 4.4-liter Turbo V8"
          className="input input-bordered"
          value={formData.engine}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Step2;
