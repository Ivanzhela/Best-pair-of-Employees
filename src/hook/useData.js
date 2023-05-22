import { useState } from 'react';

export const useData = () => {
    const [newData, setNewData] = useState([]);

    const setData = (data) => {

        const pairs = findPairs(data);
        const bestPair = findBestPair(pairs);
        setNewData(bestPair);
    };

    return [
        newData,
        setData
    ];
};

function findPairs(data) {

    let pairs = [];

    data.forEach((currentEmployee, currentIndex) => {
        for (let i = currentIndex + 1; i < data.length; i++) {
            const nextEmployee = data[i];

            if (currentEmployee[1] === nextEmployee[1]) {
                const daysWorked = calculateDaysWorked(currentEmployee[2], currentEmployee[3], nextEmployee[2], nextEmployee[3]);
                const firstEmployee = Math.min(currentEmployee[0], nextEmployee[0]);
                const secondEmployee = Math.max(currentEmployee[0], nextEmployee[0]);
                const pair = {
                    employee1: firstEmployee,
                    employee2: secondEmployee,
                    project: currentEmployee[1],
                    daysWorked: daysWorked
                };
                
                if (daysWorked !== undefined) {
                    pairs.push(pair);
                };
            };
        };
    });

    return pairs;
}

function findBestPair(pairs) {

    let bestPairData = {};
    let bestTime = 0;
    let bestPair = '';

    pairs.forEach((pair) => {
        const { employee1, employee2, ...otherData } = pair;
        const keyPair = `${employee1} ${employee2}`;
        if (!bestPairData.hasOwnProperty(keyPair)) {
            bestPairData[keyPair] = [];
        };
        bestPairData[keyPair].push(otherData);
    });

    Object.entries(bestPairData).forEach((pair) => {
        let currentTime = 0;
        pair[1].map(a => currentTime += a.daysWorked);
        if (currentTime > bestTime) {
            bestTime = currentTime;
            bestPair = pair[0];
        };
    });

    const [employee1, employee2] = bestPair.split(' ');
    const result = [employee1, employee2, bestPairData[bestPair]];

    return result;
}

function calculateDaysWorked(startDate1, endDate1, startDate2, endDate2) {

    const dateFrom1 = startDate1 == 'NULL' ? new Date() : new Date(startDate1);
    const dateFrom2 = startDate2 == 'NULL' ? new Date() : new Date(startDate2);
    const dateTo1 = endDate1 == 'NULL' ? new Date() : new Date(endDate1);
    const dateTo2 = endDate2 == 'NULL' ? new Date() : new Date(endDate2);
    const maxFromDate = new Date(Math.max.call(null, dateFrom1, dateFrom2));
    const minToDate = new Date(Math.min.call(null, dateTo1, dateTo2));
    const daysDiff = minToDate.getTime() - maxFromDate.getTime();
    const daysWorked = Math.ceil(daysDiff / (1000 * 60 * 60 * 24));
    const result = daysWorked > 0 ? daysWorked : undefined;

    return result;
}