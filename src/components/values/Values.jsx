import "./values.css";
import ValuesDescription from "./ValuesDescription";
import ValuesTeaching from "./ValuesTeaching";
import valuesEllipse from '../../assets/values/values-ellipse.svg'

export default function Values() {
    return (
        <div className="values__container">
            <img className="values__ellipse" src={valuesEllipse} alt="" />
            <ValuesDescription />
            <ValuesTeaching />
        </div>
    )
}