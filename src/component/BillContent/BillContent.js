
function BillContent(props){
    console.log(props.data)
    return(
        <div>
            Received with thanks the sum of Rs.{props.data.amountInNumber}/- ( Rupees {props.data.amountInWords}.) from {props.data.name} as donation towards "ISC MEDIA CUM FOUNDATION".
        </div>
    )
}

export default BillContent;