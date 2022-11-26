import { useState, useEffect } from "react";
import { DataContext } from "../../context/Context";
import { useContext } from "react";

import { useParams } from "react-router-dom";

import Client from "./Client";
import TesterNumber from "./TesterNumber";
import Video from "./Video";

function ShowTestDetail() {
  const { data } = useContext(DataContext);

  const { testerNumberURL } = useParams();

  const [dataToShow, setDataToShow] = useState([]);

  useEffect(() => {
    const setTester = () => {
      const tester = testerNumberURL.split("-");
      const testerNumber = +tester[tester.length - 1] - 1;
      setDataToShow(data[testerNumber]);
    };
    setTester();
  }, []);

  const { linkVideo, transcripcion, cliente, preguntas } = dataToShow;

  return (
    <div>
      {typeof linkVideo !== "undefined" && (
        <>
          <Client client={cliente} />
          <TesterNumber testerNumber={testerNumberURL.split("-").pop()} />
          <Video linkVideo={linkVideo}/>
          <p>{linkVideo}</p>

          <p>{transcripcion.slice(0, 20)}</p>

          <p> {preguntas[0].texto}</p>
        </>
      )}
    </div>
  );
}
export default ShowTestDetail;
