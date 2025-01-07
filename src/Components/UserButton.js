import { useState } from "react";

function UserButton() {
  //hook
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="d-grid gap-2 col-6 mx-auto">
      <button
        className={
          isClicked === false
            ? "btn btn-primary btn-lg"
            : "btn btn-primary btn-lg disabled"
        }
        type="button"
        onClick={() => {
          setIsClicked(true);
        }}
      >
        Find User
      </button>
      <h3>{isClicked === true && "Searching..."}</h3>
    </div>
  );
}

export default UserButton;
