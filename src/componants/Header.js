import React from "react";

const Header = (props) => {
  console.log(props)

  const { haha, setcount, student } = props;
  return (
    <div>
      <div className="logo">{haha}</div>
      <div>
        <button onClick={() => setcount((e) => e + 1)}>Tang</button>
        <button onClick={() => setcount((e) => e - 1)}>Giam</button>
      </div>
    </div>
  );
};

export default Header;
