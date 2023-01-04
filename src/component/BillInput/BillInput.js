import { useState } from "react";
import "./BillInput.css";
import BillContent from "../BillContent/BillContent";
import { useRef } from "react";
import jsPDF from "jspdf";
import { ToWords } from 'to-words';

function BillInput() {
  const reportTemplateRef = useRef(null);
  const toWords = new ToWords();

  const handleGeneratePdf = () => {
    setBillInfo({ data: billDetails });
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });

    setVolunteerName("");
    setBillAmount("");
    setBillDate("");
  };

  const [volunteerName, setVolunteerName] = useState(String);
  const [billAmount, setBillAmount] = useState(Number);
  const [billAmountInWords, setBillAmountInWords] = useState(String)
  const [billDate, setBillDate] = useState(String);
  const [billInfo, setBillInfo] = useState({});

  const billDetails = {
    name: volunteerName,
    amountInNumber: billAmount,
    amountInWords: billAmountInWords,
    date: billDate,
  };

  const NameChangeHandler = (event) => {
    setVolunteerName(event.target.value);
  };
  const AmountChangeHandler = (event) => {
    setBillAmount(event.target.value);
    setBillAmountInWords( toWords.convert(event.target.value, { currency: true }));
  };
  const DateChangeHandler = (event) => {
    setBillDate(event.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            onChange={NameChangeHandler}
            value={volunteerName}
          ></input>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            onChange={AmountChangeHandler}
            value={billAmount}
          ></input>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            onChange={DateChangeHandler}
            value={billDate}
          ></input>
        </div>
      </form>
      <div>
        <button className="button" onClick={handleGeneratePdf}>
          Generate PDF
        </button>
        <div ref={reportTemplateRef}>
          {billInfo.data ? (
            <BillContent data={billInfo.data}></BillContent>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default BillInput;
