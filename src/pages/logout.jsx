import withSession from "./../utils/withSession";

export default function Logout() {}

export const getServerSideProps = withSession(function ({ req }) {
  if (req.session.get("authKey")) {
    req.session.destroy();
  }

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
});
