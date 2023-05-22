import { Cell } from "./Cell/Cell";
import style from "./Row.module.css";

export const Row = ({ emp1, emp2, pairData, index, className, project, days }) => {
    return (
        <div className={className ? style[className] : style.row}>
            <div className={style["row-number"]}>
                <Cell value={index == "#" ? index : index + 1} />
            </div>
            <Cell value={emp1} />
            <Cell value={emp2} />
            <Cell value={project ? project : pairData.project} />
            <Cell value={days ? days : pairData.daysWorked} />
        </div>
    );
};