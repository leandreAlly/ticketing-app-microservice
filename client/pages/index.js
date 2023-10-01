import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  return (
    <main className="container">
      <h1>{currentUser ? "You are signed in." : "You are NOT signed in!"}</h1>
    </main>
  );
};

LandingPage.getInitialProps = async (context) => {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");

  return data;
};

export default LandingPage;
