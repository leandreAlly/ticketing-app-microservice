import React from "react";

const LandingPage = ({ color }) => {
  console.log("I am in the component", color);
  return (
    <div>
      <h1>Landing Page3</h1>
    </div>
  );
};

LandingPage.getInitialProps = async (context) => {
  console.log("I am on the server");
  return { color: "red" };
};

export default LandingPage;
