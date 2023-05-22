import { Row } from './Row/Row';
import style from './Table.module.css';

export const Table = ({ newData }) => {
    return (
        <div className={style.table}>
            <Row
                emp1={"Employee ID #1"}
                emp2={"Employee ID #2"}
                project={"Project ID"}
                days={"Days worked"}
                index={"#"}
                key={"#"}
                className={"header"}
            />
            <div className={style.body}>
                {newData.length > 0 && newData[2].map((pairData, i) =>
                    <Row
                        emp1={newData[0]}
                        emp2={newData[1]}
                        pairData={pairData}
                        index={i}
                        key={i}
                    />
                )}
            </div>
            <div className={style.footer}>
                <div>
                    Total days:
                </div>
                <div className={style["total-days"]}>
                    {newData.length > 0 && newData[2].reduce((acc, v) => acc.daysWorked + v.daysWorked)}
                </div>
            </div>
        </div>
    )
}