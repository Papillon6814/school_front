import React from 'react'
import scss from "../styles/reservation.scss"
import Footer from "../components/footer.js"

export default class extends React.Component {

    constructor(){
        super();
        this.teachers=["松平A太郎","松平B太郎","松平C太郎","松平D太郎","松平E太郎","松平D太郎"]
        this.teacher=["松平A太郎","松平B太郎","松平C太郎","松平D太郎","松平E太郎"]
        this.array = new Array()
        for(let i=0;i<24;i++){
            this.array.push("a")
        }
    }

    render(){
        return(
            <div>
                <Navi/>


                <div className={scss.title}>講師の予約</div>

                <div className={scss.scrollTeacher}>
                    <div className={scss.scrollLeft}>＜</div>
                    {this.teacher.map(data=>
                        <div className={scss.teacher}>
                            <div className={scss.image}></div>
                            <div className={scss.name}>{data}</div>
                        </div>
                    )}
                    <div className={scss.scrollRight}>＞</div>
                </div>

                <div className={scss.calender}>
                    <div className={scss.title}>予定</div>
                    
                    <div className={scss.wk}>
                        <div className={scss.weeks}>
                            <div className={scss.week}>月</div>
                            <div className={scss.week}>火</div>
                            <div className={scss.week}>水</div>
                            <div className={scss.week}>木</div>
                            <div className={scss.week}>金</div>
                            <div className={scss.week}>土</div>
                        </div>
                    </div>

                    
                    <div className={scss.times}>

                    <div className={scss.classes}>
                        <div className={scss.class}>1</div>
                        <div className={scss.class}>2</div>
                        <div className={scss.class}>3</div>
                        <div className={scss.class}>4</div>
                    </div>

                        <div className={scss.cl}>
                        {this.array.map(data=>
                        <div className={scss.time}>{data}</div>
                        )}
                        </div>
                    </div>

                </div>

                <Footer/>
            </div>
        )
    }
}