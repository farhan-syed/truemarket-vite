import CurrencyInput from 'react-currency-input-field';

function Step3({
  formData, setFormData, image, setImage,
}) {
  const handleTextChange = (event) => {
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
          onChange={handleTextChange}
        />
      </div>

      <div className="form-control w-full">
        <label htmlFor="msrp" className="label">
          <span className="label-text">msrp</span>
        </label>
        <CurrencyInput className="input input-bordered" name="msrp" prefix="$" defaultValue={formData.msrp || ''} onValueChange={(value, name) => setFormData((prevState) => ({ ...prevState, [name]: value }))} />
      </div>

      <div className="form-control w-full">
        <label htmlFor="tax" className="label">
          <span className="label-text">tax</span>
        </label>
        <CurrencyInput className="input input-bordered" name="tax" prefix="$" defaultValue={formData.tax || ''} onValueChange={(value, name) => setFormData((prevState) => ({ ...prevState, [name]: value }))} />
      </div>

      <div className="form-control w-full">
        <label htmlFor="market_adjustment" className="label">
          <span className="label-text">market adjustment</span>
        </label>
        <CurrencyInput className="input input-bordered" name="market_adjustment" prefix="$" defaultValue={formData.market_adjustment || ''} onValueChange={(value, name) => setFormData((prevState) => ({ ...prevState, [name]: value }))} />
      </div>

      <div className="form-control w-full">
        <label htmlFor="market_adjustment" className="label">
          <span className="label-text">discount</span>
        </label>
        <CurrencyInput className="input input-bordered" name="discount" prefix="$" defaultValue={formData.discount || ''} onValueChange={(value, name) => setFormData((prevState) => ({ ...prevState, [name]: value }))} />
      </div>

      <div className="form-control w-full">
        <label htmlFor="fees" className="label">
          <span className="label-text">other fees</span>
        </label>
        <CurrencyInput className="input input-bordered" name="fees" prefix="$" defaultValue={formData.fees || ''} onValueChange={(value, name) => setFormData((prevState) => ({ ...prevState, [name]: value }))} />
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
