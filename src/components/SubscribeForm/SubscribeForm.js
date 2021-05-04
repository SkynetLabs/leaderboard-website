import * as React from "react";
import classnames from "classnames";
import useSubscribe from "./useSubscribe";
import Button from "../Button";

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
          <Button type="submit" disabled={pending} buttonColor={buttonColor}>
            Notify me
          </Button>
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
