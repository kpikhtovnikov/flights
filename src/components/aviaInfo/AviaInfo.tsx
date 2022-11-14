import React, { useState } from 'react';
import { IAviaInfo } from '../../types/types';
import AviaInfoFooter from '../aviaInfoFooter/AviaInfoFooter';
import {notReturnTicket, cost} from '../../consts/consts';
import route  from '../../icons/Route.png';
import luggage from '../../icons/Luggage.png';
import airlines from '../../icons/Airlines.png';
import logoCompany  from '../../icons/LogoCompany.png';
import date from '../../data/date.json';
import './AviaInfo.scss'; 

const AviaInfo = ({findInfo}: IAviaInfo) => {

    const [timeDeparture, setTimeDeparture] = useState(date.payload[0].startTime)
    const [timeArrive, setTimeArrive] = useState(date.payload[0].finishTime)
    const [timeDepartureDown, setTimeDepartureSecondDown] = useState(date.payload[0].startTime)
    const [timeArriveDown, setTimeArriveDown] = useState(date.payload[0].finishTime)

    return (
        <div>
            <div className="containerAviaInfo">
                <div className="containerAviaInfo-child">
                <div className="boxAviaInfo">
                   <span className="boxAviaInfo-header">{notReturnTicket}</span>
                    <div className="boxAviaInfo-main">
                        <div className="boxAviaInfo-img">
                            <img src={logoCompany} alt="airlines" />
                            <img src={airlines} alt="airlines" />
                        
                        </div>
                        <div className="boxAviaInfo-main__date">
                            <div className='boxAviaInfo-main__time'>{timeDeparture}</div> 
                            <div>
                                <span className='boxAviaInfo-main__city'>{findInfo.from}</span> 
                                <br/> 
                                <span>{findInfo.start}</span>  
                            </div>
                        </div>
                        <div className="boxAviaInfo-main__line">
                            <img src={route} alt="line" />
                        </div>
                        <div className="boxAviaInfo-main__date">
                            <div className='boxAviaInfo-main__time'>{timeArrive}</div>
                            <div>
                                <span className='boxAviaInfo-main__city'>{findInfo.to}</span> 
                                <br/> 
                                <span>{findInfo.start}</span>  
                            </div>
                        </div>
                        <div className="boxAviaInfo-main__bag">
                            <img src={luggage} alt="luggage" />
                        </div>

                    </div>
                        <AviaInfoFooter setTimeDeparture={setTimeDeparture} setTimeArrive={setTimeArrive} />
                   </div>
                  
               {findInfo.finish && 
                    <div className="boxAviaInfo">
                    <div style={{display: 'flex'}}>
                    <span className="boxAviaInfo-header">{notReturnTicket}</span><span className='boxAviaInfo-header__line'></span>
                    </div>
                    <div className="boxAviaInfo-main">
                        <div className="boxAviaInfo-img">
                            <img src={logoCompany} alt="airlines" />
                            <img src={airlines} alt="airlines" />
                        
                        </div>
                        <div className="boxAviaInfo-main__date">
                            <div className='boxAviaInfo-main__time'>{timeDepartureDown}</div>
                            <div>
                                <span className='boxAviaInfo-main__city'>{findInfo.to}</span> 
                                <br/> 
                                <span >{findInfo.finish}</span>  
                            </div>
                        </div>
                        <div className="boxAviaInfo-main__line">
                            <img src={route} alt="line" />
                        </div>
                        <div className="boxAviaInfo-main__date">
                            <div className='boxAviaInfo-main__time'>{timeArriveDown}</div>
                            <div>
                                <span className='boxAviaInfo-main__city'>{findInfo.from}</span> 
                                <br/> 
                                <span >{findInfo.finish}</span>  
                            </div>
                        </div>
                        <div className="boxAviaInfo-main__bag">
                            <img src={luggage} alt="luggage" />
                        </div>

                    </div>
                    <AviaInfoFooter setTimeDeparture={setTimeDepartureSecondDown} setTimeArrive={setTimeArriveDown} />
                    </div> } 
                </div>
                <div className="containerAviaInfo-sum"> {findInfo.finish ? cost.first : cost.second}</div>
            </div>
        </div>
    )
} 

export default AviaInfo;
