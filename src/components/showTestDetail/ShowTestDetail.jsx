import { useState, useEffect } from "react";
import { DataContext } from "../../context/Context";
import { useContext } from "react";

import { useParams } from "react-router-dom";

import Client from "./Client";
import TesterNumber from "./TesterNumber";
import Video from "./Video";
import Transcription from "./Transcription";

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

  const changeText = (string) => {
    const toBeReplaced = /(\\n|<br>)/g;
    const toReplaceWith = "\n";

    return string.replace(toBeReplaced, toReplaceWith);
  };

  return (
    <div>
      {typeof linkVideo !== "undefined" && (
        <>
          <Client client={cliente} />
          <TesterNumber testerNumber={testerNumberURL.split("-").pop()} />
          <Video linkVideo={linkVideo} />
          <Transcription transcription={transcripcion} changeText={changeText} />

          <p> {preguntas[0].texto}</p>
        </>
      )}
    </div>
  );
}
export default ShowTestDetail;
