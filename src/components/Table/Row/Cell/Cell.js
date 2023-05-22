import style from "./Cell.module.css";

export const Cell = ({ value }) => {
    return (
        <div className={style.cell}>{value}</div>
    );
};