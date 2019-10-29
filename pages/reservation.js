import React from 'react'
import scss from "../styles/reservation.scss"
import Navi from "../components/navigation.js"
import Footer from "../components/footer.js"

export default class extends React.Component {

    constructor(){
        super();
        this.teachers=["松平A太郎","松平B太郎","松平C太郎","松平D太郎","松平E太郎","松平F太郎","松平G太郎","松平H太郎","松平I太郎","松平J太郎","松平K太郎","松平L太郎"]
        this.name = "AAAAA"

        this.right = React.createRef()
        this.left = React.createRef()
        this.pop = React.createRef()
        this.array = new Array()
        this.tch = new Array()
        this.tc = React.createRef()
        this.months = new Array()

        this.times=["10:00 ~ 11:00","11:00 ~ 12:00","13:00 ~ 14:00","14:00 ~ 15:00"]

        for(let i=0;i<4;i++){
            this.array.push(new Array())
            for(let j = 0;j<6;j++){
                this.array[i].push("a")
            }
        }

        for(let i=0;i<this.teachers.length;i++){
            this.tch.push(React.createRef())
        }

        
        this.today = new Date()
        let last = new Date(this.today.getFullYear(),this.today.getMonth()+1,0),
            start = new Date(this.today.getFullYear(),this.today.getMonth(),0)

        let i,arr = new Array(),nextArr = new Array(),lastArr = new Array();
        for(let j=0,i=start.getDay();i>=0 && i<5;i--,j++){
            lastArr.unshift(start.getDate() - j)
        }

        for(let i=1;i<=last.getDate();i++){
            arr.push(i)
            this.months.push(React.createRef())
        }

        for(let i=last.getDay(),j=1;i<6;i++,j++){
            nextArr.push(j)
        }

        this.state={
            start:0,
            last:5,
            teacherId:0,
            time:0,
            lastDay:last,
            startDay:start,
            month:arr,
            lastMonth:lastArr,
            nextMonth:nextArr,
        }

    }

    componentDidMount(){
        if(this.state.last >= this.teachers.length){
            this.right.current.style.visibility = "hidden"
        }

        this.tch[0].current.style.background="red"

        let i
        for(i=0;i<5;i++){
            this.tch[i].current.className=scss["teacher"+i]
        }
        for(;i<this.teachers.length;i++){
            this.tch[i].current.className=scss.outTeacher
        }

        this.months[this.today.getDate() - 1].current.style.color="red"
        for(let j=7-this.state.startDay.getDay()-1;j<this.state.lastDay.getDate();j+=7){
            this.months[j].current.style.background="#777"
            this.months[j].current.style.cursor="auto"
        }
    }

    LeftClick(){
        const i = this.state.start -5

        let j
        for(let a=0,j=i;j<this.state.start;j++,a++){
            this.tch[j].current.className = scss["teacher"+a]
        }

        for(j=this.state.start;j<this.state.last;j++){
            this.tch[j].current.className = scss.outTeacher
        }

        if(i == 0){
            this.left.current.style.visibility="hidden" 
        }else{
            this.left.current.style.visibility="visible" 
        }
        
        this.right.current.style.visibility="visible" 

        this.tch[this.state.teacherId].current.style.background = "white"
        this.tch[i].current.style.background = "red"

        this.setState({
            teacherId:i,
            start:i,
            last:this.state.start
        })
    }

    RightClick(){
        let i = this.state.last + 5

        let j
        for(j=this.state.start;j<this.state.last;j++){
            this.tch[j].current.className = scss.inTeacher
        }

        if(i >= this.teachers.length){
            this.right.current.style.visibility="hidden" 

            for(let a=0;j<this.teachers.length;j++,a++){
                this.tch[j].current.className = scss["teacher"+a]
            }

            i=this.teachers.length
        }else{
            this.right.current.style.visibility="visible"

            for(let a=0;j<i;j++,a++){
                this.tch[j].current.className = scss["teacher"+a]
            }
        }
        
        this.left.current.style.visibility="visible"

        

        this.tch[this.state.teacherId].current.style.background = "white"
        this.tch[this.state.last].current.style.background = "red"
        
        this.setState({
            teacherId:this.state.last,
            start:this.state.last,
            last: i
        })
        // this.tc.current.className=scss.teacher
        // this.tch[0].current.style.display="none"
        
    }

    clickTeacher(id){
        this.tch[this.state.teacherId].current.style.background="white"
        this.tch[id].current.style.background="red"
        this.setState({
            teacherId:id
        })
    }

    timeClick(day,time){
        this.pop.current.style.display = "inline"
        this.setState({
            time:time
        })
    }

    cancelClick(){
        this.pop.current.style.display = "none"
    }

    dicisionClick(){
        this.pop.current.style.display = "none"
    }

    render(){
        return(
            <div>
                <div>
                    <Navi/>


                    <div className={scss.title}>講師の予約</div>

                    <div className={scss.scrollTeacher}>
                        <div className={scss.scrollLeft} onClick={this.LeftClick.bind(this)} ref={this.left}>＜</div>

                        <div className={scss.teachers}>
                        {this.teachers.map((data,index)=>
                            <div className={scss.teacher} key={index} onClick={this.clickTeacher.bind(this,index)} ref={this.tch[index]}>
                                <div className={scss.image}></div>
                                <div className={scss.name}>{data}</div>
                            </div>
                        )}
                        </div>
                        {/* <div className={scss.outTeacher} ref={this.tc}>
                                <div className={scss.image}></div>
                                <div className={scss.name}>Out</div>
                        </div> */}
                        
                        <div className={scss.scrollRight} onClick={this.RightClick.bind(this)} ref={this.right}>＞</div>
                    </div>

                    <div className={scss.calender}>
                        <div className={scss.title} ref="title">{this.today.getMonth()+1}月</div>
                        
                        <div className={scss.wk}>
                            <div className={scss.weeks}>
                                <div className={scss.week}><div id={scss.sunday}>日</div></div>
                                <div className={scss.week}><div id={scss.monday}>月</div></div>
                                <div className={scss.week}><div id={scss.tuesday}>火</div></div>
                                <div className={scss.week}><div id={scss.wednesday}>水</div></div>
                                <div className={scss.week}><div id={scss.thursday}>木</div></div>
                                <div className={scss.week}><div id={scss.friday}>金</div></div>
                                <div className={scss.week}><div id={scss.saturday}>土</div></div>
                            </div>
                        </div>

                        
                        <div className={scss.times}>

                        {/* <div className={scss.classes}>
                            <div className={scss.class}>1</div>
                            <div className={scss.class}>2</div>
                            <div className={scss.class}>3</div>
                            <div className={scss.class}>4</div>
                        </div> */}


                            {this.state.lastMonth.map((data,index)=>
                                <div className={scss.lastTime} key={index}>{data}</div>
                            )}

                            {this.state.month.map((data,index)=>
                                <div className={scss.time} key={index} ref={this.months[index]}>{data}</div>
                            )}

                            {this.state.nextMonth.map((data,index)=>
                                <div className={scss.nextTime} key={index}>{data}</div>
                            )}
                        </div>

                    </div>

                    <Footer/>


                    <div className={scss.pops} ref={this.pop}>
                        <div className={scss.bookSheet}>
                            
                            <div className={scss.cancel} onClick={this.cancelClick.bind(this)}>×</div>

                            <div className={scss.sheet}>
                                <div className={scss.cliant}>{this.name}様</div>
                                <div className={scss.bookTime}>{this.times[this.state.time]}</div>
                                <div className={scss.bookTeacher}>担当:{this.teachers[this.state.teacherId]}</div>
                                <div className={scss.bookText}>で予約します</div>
                            </div>
                            
                            <div className={scss.bookButton}>
                                <div className={scss.doubleButton}>
                                <div className={scss.Button} onClick={this.dicisionClick.bind(this)}>決定</div>
                                </div>

                                <div className={scss.doubleButton}>
                                <div className={scss.Button} onClick={this.cancelClick.bind(this)}>キャンセル</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        )
    }
}