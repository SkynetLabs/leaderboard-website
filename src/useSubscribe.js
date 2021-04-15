import { useState, useCallback } from "react";
import { useAsync } from "react-use";
import jsonp from "jsonp";

const mailer = "https://tech.us11.list-manage.com/subscribe/post-json?u=5df238d9e852f9801b5f2c92e&amp;id=ab6bea4cc2";
const initialState = { complete: false, pending: false, success: false, message: "" };
const initialData = { email: "" };

export default function useSubscribe() {
  const [{ email }, setData] = useState(initialData);
  const [state, setState] = useState(initialState);

  useAsync(async () => {
    if (!email) return;

    setState(initialState);

    const url = [mailer, `EMAIL=${email}`].join("&");

    jsonp(url, { param: "c" }, (error, data) => {
      const success = !error && data.result === "success";
      const message = data ? data.msg : "";

      setState({ complete: true, pending: false, success, message });
    });
  }, [email]);

  const subscribe = useCallback((email) => setData({ email }), [setData]);

  return { subscribe, ...state };
}
