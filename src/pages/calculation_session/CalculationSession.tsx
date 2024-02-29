import { useState } from "react";
import "./CalculationSession.css";
import { useNavigate } from "react-router-dom";

export const CalculationSession = () => {
  const [sessionList, _setSessionList] = useState<Array<any>>([]);
  const navigate = useNavigate();

  const addSession = () => {
    navigate("/dashboard/add-session");
  };



  return (
    <>
      <div className="calculation_session_main_container max_width">
        <div className="calculation_session_title">Your calculations</div>
        {sessionList.length ? (
          <>
            <div className="calculation_session_table_container"></div>
          </>
        ) : (
          <>
            <div className="calculation_session_empty_container">
              <div className="calculation_session_empty_text">No calculations available.</div>
              <div>
                <button className="calculation_session_add_button" onClick={addSession}>Add Calculation</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
