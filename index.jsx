//single selection

import { useState } from "react";
import data from "./data";
import "./styles.css"

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function singleClickSelection(x) {
    setSelected(x===selected?null:x);
  }
  return (
    <div className="firstWrap">
      <div className="secondWrap">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div className="title">
                <h3>{dataItem.question}</h3>
                <div className="button">

                {selected===dataItem.id? <button className="hideButton"  onClick={() => {
                  singleClickSelection(dataItem.id);
                } }>Hide answer</button>: <button className="showButton"  onClick={() => {
                    singleClickSelection(dataItem.id);
                  } }>Show answer</button>}
              </div>
              <div>
                {selected === dataItem.id ? (
                  <div className="answers">{dataItem.answer}  </div>
                 
                ) : 
                  null
                }
              </div>
              
              </div>
              
             
            </div>
          ))
        ) : (
          <div>Data not found!</div>
        )}
      </div>
    </div>
  );
}
