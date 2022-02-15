import { Link, useActionData, useLoaderData, useTransition } from "remix";
import { ActionFunction, LoaderFunction } from "@src/util/remix.aux";

interface LoaderData {
  foo: string;
}

export const loader: LoaderFunction<LoaderData> = async (args) => {
  return { foo: "Bar baz!" };
};

/* --------------- */

export const action: ActionFunction = async (args) => {
  return { ok: true };
};

/* --------------- */

export default function About() {
  const transition = useTransition();
  const loaderData = useLoaderData<LoaderData>();
  const actionData = useActionData();

  return (
    <div>
      <p>About!</p>
      <Link to="/">Back to home</Link>
      {transition.state}
    </div>
  );
}
