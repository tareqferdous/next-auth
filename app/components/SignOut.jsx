import { doSignOut } from "../actions";

const SignOut = () => {
  return (
    <form action={doSignOut}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default SignOut;
