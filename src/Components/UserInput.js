function UserInput() {
  return (
    <>
      <h1>Let's Get Your Card Data</h1>
      <div className="mb-3">
        <label htmlFor="formInput1" className="form-label">
          User-Tag
        </label>
        <input
          type="userID"
          className="form-control"
          id="formInput1"
          placeholder="#92RULP26"
        ></input>
      </div>
    </>
  );
}

export default UserInput;
