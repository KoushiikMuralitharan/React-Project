import '../Component/Recommended/Recommended.css'

const Buttons = ({ onClickHandler, value, title }) => {
    return (
      <button onClick={onClickHandler} value={value} className="bttns">
        {title}
      </button>
    );
  };
  
  export default Buttons;