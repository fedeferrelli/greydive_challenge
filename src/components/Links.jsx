import { DataContext } from "../context/Context";
import { useContext } from "react";

import { Link } from "react-router-dom";

function Links() {
  const { data } = useContext(DataContext);

  return (
    <ul className="mt-4 font-bold text-xl">
      {data?.map((data, i) => (
        <li key={i} className="mt-2" >
          <Link className="hover:text-secondary/80 duration-300" to={`/tester-${i + 1}`}>
            Tester {i + 1}: <span className="capitalize"> {data.cliente}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Links;
