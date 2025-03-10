import { doSignIn } from "../actions";

const Signin = () => {
  return (
    <form action={doSignIn}>
      <button
        className="border border-gray-400 px-4 py-2 text-green-500 bg-gray-100 font-semibold rounded-md"
        type="submit"
      >
        SignIn with Google
      </button>
    </form>
  );
};

export default Signin;
