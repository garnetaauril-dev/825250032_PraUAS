// Kotak pencarian putih yang menumpuk di bawah hero
export default function BoatSearch() {
  return (
    <div className="container search-wrap">
      <form className="search-box" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label>Pick - Up Date:</label>
          <input type="date" />
        </div>
        <div className="field">
          <label>Drop - Up Date:</label>
          <input type="date" />
        </div>
        <div className="field">
          <label>Select Make</label>
          <select defaultValue="">
            <option value="">All Makes</option>
            <option>Sailing Yacht</option>
            <option>Motor Yacht</option>
            <option>Catamaran</option>
          </select>
        </div>
        <button className="btn-blue">Search</button>
      </form>
    </div>
  );
}
