import "./Calendar.css"
import React from "react"
import * as AiIcons from "react-icons/ai";


export default function CalendarContent() {
    return (
        <div>
            <div className='card'>
            <div className="month">
                <ul>
                    <li className="prev">❮</li>
                    <li className="next">❯</li>
                    <li>
                        Dezember
                        <span style={{ fontSize: 18 }}>2022</span>
                    </li>
                </ul>
            </div>
            <ul className="weekdays">
                <li>Mo</li>
                <li>Di</li>
                <li>Mi</li>
                <li>Do</li>
                <li>Fr</li>
                <li>Sa</li>
                <li>So</li>
            </ul>
            <ul className="days">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>
                <form action="">
                <button className="notactive2">11</button>
                </form>
                </li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>
                <form action="/CalendarEintrag">
                <button className="notactive">20</button>
                </form>
                </li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
                <lip>1</lip>
                <lip>2</lip>
                <lip>3</lip>
                <lip>4</lip>
            </ul>
            </div>
            <br/>
            <div className="Eintrag1">
            <form action="/Calendar">
                    <button type="submit" className="btn">Eintrag hinzufügen <i className="plus"><AiIcons.AiOutlinePlusCircle /></i></button>
                </form>
            </div>
            </div>
    )
}

