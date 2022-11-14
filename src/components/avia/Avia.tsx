import React, { useEffect, useState } from 'react';
import { IAvia } from '../../types/types';
import {regExp, dateFormat, place, dateFormatPlaceHolder, searchButton, city} from '../../consts/consts';
import { DatePicker } from 'antd'; 
import type { DatePickerProps } from 'antd';
import 'antd/dist/antd.min.css';
import { Link } from 'react-router-dom';
import './Avia.scss';

const Avia = ({setFindInfo}: IAvia) => {
    const [from, setFrom] = useState<string>('')
    const [to, setTo] = useState<string>('')
    const [start, setDateStart] = useState<string>('')
    const [finish, setDateFinish] = useState<string>('')
    const [disabledBtn, setDisabledBtn] = useState<boolean>(true)

    useEffect(() => {

        if(from && to && start) {
            setDisabledBtn(false)
        } else {
            setDisabledBtn(true)
        }

    }, [from, to, start])

    const onChangeText = (text: string, check: string) => {
        const onlyText = text.replace(regExp, '')
        if(check === 'from') {
            setFrom(onlyText) 
        } else {
            setTo(onlyText) }
        }
    
    const onChangeDateStart: DatePickerProps['onChange'] = (date) => {
       date && setDateStart(date.format(dateFormat))
       date === null && setDateStart('')
    }

    const onChangeDateFinish: DatePickerProps['onChange'] = (date) => {
        date && setDateFinish(date.format(dateFormat))
        date === null && setDateFinish('')}
    
        const clickToFinder = () => {
            setFindInfo({
                from,
                to,
                start,
                finish
            })
        }



    return (
        <div className='avia'>
            <div className='inputBlock'>
                <div className="inputBox">
                    <span className='inputBox-span'>{place.whereFrom}</span>
                    <input type='text' placeholder={city.departure} className='inputBox-input'  onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeText(e.target.value, 'from')} 
                    value={from} /> 
                </div>
                <div className="inputBox">
                    <span className='inputBox-span'>{place.where}</span>
                    <input type='text' placeholder={city.arrival} className='inputBox-input'  onChange={(e:React.ChangeEvent<HTMLInputElement>) => onChangeText(e.target.value, 'to')}
                    value={to} /> 
                </div>
                <div className="inputBox">
                    <span className='inputBox-span'>{place.there}</span>
                    <DatePicker onChange={onChangeDateStart}  placeholder={dateFormatPlaceHolder} format={dateFormat}/>
                </div>
                <div className="inputBox">
                    <span className='inputBox-span'>{place.back}</span>
                <DatePicker onChange={onChangeDateFinish}   placeholder={dateFormatPlaceHolder} format={dateFormat} />
                </div>
            </div>
            <div className='avia-btn'>
                <button type='button' style={disabledBtn ? {background: 'grey'} : {}} onClick={clickToFinder} disabled={disabledBtn}>
                    {
                        disabledBtn ? <span>{searchButton}</span> : <Link to="/avia/info">{searchButton}</Link>
                    }
                </button>
            </div>
        </div>
    )
}

export default Avia;
