import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import { useData } from '../hook/useData';
import { Table } from './Table/Table';

export const Home = () => {
    
    const [data, setData] = useState([]);
    const [newData, setNewData] = useData([]);

    useEffect(() => {
        data.length > 0 && setNewData(data);
    }, [data]);

    const changeHandler = (event) => {
        Papa.parse(event.target.files[0], {
            skipEmptyLines: true,
            delimiter: ", ",
            dynamicTyping: true,
            complete: function (results) {
                setData(results.data);

            }
        });
    };

    return (
        <section className="container">
            <div className="file-container">
                <label htmlFor="file-upload" className="custom-file-upload">
                    <input
                        type="file"
                        name="file"
                        id="file-upload"
                        onChange={changeHandler}
                        accept=".csv"
                    />
                    select file
                </label>
            </div>
            {newData.length > 0 ?
                <Table newData={newData} />
                :
                <p>Please select a file to generate a pair of employees who have worked together on common projects for the longest duration.</p>
            }
        </section>
    );
};