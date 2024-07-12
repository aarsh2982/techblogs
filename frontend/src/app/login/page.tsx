import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      Login
      <div>
        <Link href="/signup" style={{ color: "blue", backgroundColor: "red" }}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
