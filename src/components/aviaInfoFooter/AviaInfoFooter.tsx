import  { useState } from 'react';
import { IAviaInfoFooter  } from '../../types/types';
import classnames from 'classnames';
import date from '../../data/date.json';

const AviaInfoFooter = ({setTimeDeparture,setTimeArrive}: IAviaInfoFooter) => {

    const [first, setFirst] = useState(date.payload[0])
    const [second, setSecond] = useState(date.payload[1])
    const [third, setThird] = useState(date.payload[2])

    const clickChoseTime = (info: string) => {
        switch (info) {
            case 'first': 
                setFirst({...first, active: true})
                setSecond({...second, active: false})
                setThird({...third, active: false})
                setTimeDeparture(date.payload[0].startTime)
                setTimeArrive(date.payload[0].finishTime)

            break;
            case 'second': 
                setFirst({...first, active: false})
                setSecond({...second, active: true})
                setThird({...third, active: false})
                setTimeDeparture(date.payload[1].startTime)
                setTimeArrive(date.payload[1].finishTime)
            break;
            case 'third' : 
                setFirst({...first, active: false})
                setSecond({...second, active: false})
                setThird({...third, active: true})
                setTimeDeparture(date.payload[2].startTime)
                setTimeArrive(date.payload[2].finishTime)
            break;
        } }

        const firstClass = classnames({
            'boxAviaInfo-footer__time': true,
            'active': first.active
        })
        const secondClass = classnames({
            'boxAviaInfo-footer__time': true,
            'active': second.active
        })
        const thirdClass = classnames({
            'boxAviaInfo-footer__time': true,
            'active': third.active
        })

    return (
        <div className="boxAviaInfo-footer">
            <div className={firstClass}   onClick={() => clickChoseTime('first')}>{`${first.startTime} - ${first.finishTime}`}</div>
            <div className={secondClass} onClick={() => clickChoseTime('second')} >{`${second.startTime} - ${second.finishTime}`}</div>
            <div className={thirdClass} onClick={() => clickChoseTime('third')}>{`${third.startTime} - ${third.finishTime}`}</div>
        </div>
    )
}

export default AviaInfoFooter;
