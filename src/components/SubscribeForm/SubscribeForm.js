import * as React from "react";
import classnames from "classnames";
import useSubscribe from "./useSubscribe";

export default function SubscribeForm({ buttonColor = "primary" }) {
  const [email, setEmail] = React.useState("");
  const { subscribe, complete, success, message, pending } = useSubscribe();

  const onSubscribe = async (event) => {
    event.preventDefault();

    subscribe(email);
  };

  return (
    <form onSubmit={onSubscribe} className="mt-12 flex flex-col">
      <div className="sm:max-w-lg sm:w-full sm:flex">
        <div className="min-w-0 flex-1">
          <label htmlFor="hero_email" className="sr-only">
            Email address
          </label>
          <input
            id="hero_email"
            type="email"
            className="block w-full border border-palette-200 rounded-md px-5 py-3 text-base text-palette-600 placeholder-palette-300 shadow-sm focus:border-primary focus:ring-primary"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            disabled={pending}
            className={classnames(
              "block w-full rounded-md border border-transparent px-5 py-3 text-base font-semibold shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-10 transition-colors duration-200",
              {
                "bg-primary text-palette-600 hover:bg-primary-light": buttonColor === "primary",
                "bg-palette-600 text-white hover:bg-palette-500": buttonColor === "dark",
              }
            )}
          >
            Notify me
          </button>
        </div>
      </div>

      {complete && message && (
        <div
          className={classnames("mt-2 font-content sm:max-w-lg sm:w-full", {
            "text-error": !success,
            "text-palette-400": success,
          })}
          dangerouslySetInnerHTML={{ __html: message }}
        ></div>
      )}
    </form>
  );
}
