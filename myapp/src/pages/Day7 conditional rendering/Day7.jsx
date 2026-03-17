import React, { useState } from "react";

const Day7 = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const isUserIsAdmin = false;
  return (
    <div>
      {isUserIsAdmin && <h1>Hello Admin..</h1>}
      {isUserLoggedIn ? (
        isUserLoggedIn ? (
          <h1>Inside first true</h1>
        ) : (
          <h1>False</h1>
        )
      ) : (
        <h1>Please login.</h1>
      )}
    </div>
  );
  //   if (false) {
  //     return <div>Condition is true</div>;
  //   }
  //   if (true) {
  //     return <div>Condition is true again</div>;
  //   }
  //   return <div>Day7</div>;
};

export default Day7;
