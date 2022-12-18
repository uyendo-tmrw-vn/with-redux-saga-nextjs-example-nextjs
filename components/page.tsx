import Link from "next/link";
import { useSelector } from "react-redux";

import Counter from "./counter";
import Clock from "./clock";
import { State } from "../reducer";
import { AnyAction } from "redux";

interface Props {
  linkTo: string;
  NavigateTo: string;
  title: string;
}

function Page({ linkTo, NavigateTo, title }: Props) {
  const placeholderData = useSelector<State, State["placeholderData"]>(
    state => state.placeholderData
  );
  const error = useSelector<State, State["error"]>(state => state.error);
  const light = useSelector<State, State["light"]>(state => state.light);
  const lastUpdate = useSelector<State, State["lastUpdate"]>(
    state => state.lastUpdate
  );
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}

export default Page;
