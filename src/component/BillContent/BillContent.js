import "./BillContent.css";
import logo from "./logo.png";

function BillContent(props) {
  const regNum = "(Reg.No: 86/2019)";
  return (
    <>
      <div className="p-5">
        <div className="pfd-content">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="trust-name">ISC MEDIA CUM FOUNDATION</h1>
          <p className="reg-num">{regNum}</p>
          <h5 className="content-heading">DONATION RECEIPT</h5>
          <div className="content-main">
            <p>
              Received with thanks the sum of Rs.{props.data.amountInNumber}/- (
              {props.data.amountInWords}.) from {props.data.name} as donation
              towards ISC MEDIA CUM FOUNDATION.
            </p>

            <div className="foot_area">
              <div className="pdf-footer">
                <div className="place-date">
                  <p className="place">Kanyakumari</p>
                  <p className="date">{props.data.date}</p>
                </div>
                <div className="sign">
                  <img src={logo} alt="logo" className="logo" />
                  <p>Treasurer</p>
                  <p>
                    <strong>ISC MEDIA CUM FOUNDATION</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BillContent;
