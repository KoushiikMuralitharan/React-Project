import Inputs from "../../Inputs";
import "./Category.css";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Inputs
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Inputs
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Inputs
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Inputs
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
