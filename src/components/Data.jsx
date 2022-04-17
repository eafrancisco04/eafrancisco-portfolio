function Data(props) {

    return(
        <div className="data">
                    <h3>{props.head}</h3>
                    <h4>{props.subhead}</h4>
                    <h5 className="date">{props.date}</h5>
                    <p>
                        {props.descr}
                    </p>
        </div>
    )

}

    export default Data;