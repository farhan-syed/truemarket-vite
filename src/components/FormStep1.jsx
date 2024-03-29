import moment from 'moment';

function Step1({
  formData, setFormData,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (event) => {
    const { name, value } = event.target;

    const date = moment(value).utc().format();

    setFormData((prevState) => ({
      ...prevState,
      [name]: date,
    }));
  };

  return (
    <>
      <div className="form-control w-full">
        <label htmlFor="purchase_date" className="label">
          <span className="label-text">purchase date</span>
        </label>
        <input
          id="purchase_date"
          type="date"
          name="purchase_date"
          className="input input-bordered"
          onChange={handleDateChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="zipcode" className="label">
          <span className="label-text">zipcode purchased in</span>
        </label>
        <input
          id="zipcode"
          type="text"
          name="zipcode"
          placeholder="ex. 92602"
          className="input input-bordered"
          value={formData.zipcode || ''}
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="condition" className="label">
          <span className="label-text">condition</span>
        </label>
        <select
          id="condition"
          name="condition"
          className="select select-bordered"
          value={formData.condition}
          onChange={handleChange}
        >
          <option>select one</option>
          <option>New</option>
          {/* <option>Used</option> */}
        </select>
      </div>
    </>
  );
}

export default Step1;
