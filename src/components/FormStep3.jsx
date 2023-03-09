function Step3({
  formData, setFormData, image, setImage,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <>
      <div className="form-control w-full">
        <label htmlFor="options" className="label">
          <span className="label-text">options/packages</span>
          {/* <span className="label-text-alt">ex. Shadowline Package</span> */}
        </label>
        <textarea
          name="options"
          className="textarea textarea-bordered h-24"
          placeholder="ex. Shadowline Package"
          value={formData.options}
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="msrp" className="label">
          <span className="label-text">msrp</span>
        </label>
        <input
          type="text"
          name="msrp"
          className="input input-bordered"
          value={formData.msrp || ''}
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="tax" className="label">
          <span className="label-text">tax</span>
        </label>
        <input
          type="text"
          name="tax"
          placeholder=""
          className="input input-bordered"
          value={formData.tax || ''}
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="market_adjustment" className="label">
          <span className="label-text">market adjustment</span>
        </label>
        <input
          type="text"
          name="market_adjustment"
          placeholder=""
          className="input input-bordered"
          value={formData.market_adjustment || ''}
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="fees" className="label">
          <span className="label-text">fees</span>
        </label>
        <input
          type="text"
          name="fees"
          placeholder=""
          className="input input-bordered"
          value={formData.fees || ''}
          onChange={handleChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="file" className="label">
          <span className="label-text">window sticker (optional; highly reccomended)</span>
        </label>
        <input
          type="file"
          name="file"
          accept="image/*"
          className="file-input file-input-bordered"
          onChange={handleImageChange}
        />
      </div>
    </>
  );
}

export default Step3;
