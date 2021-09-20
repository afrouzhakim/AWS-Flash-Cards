import React from "react";
//npm i --save @fortawesome/fontawesome-svg-core
//npm install --save @fortawesome/free-solid-svg-icons
//npm install --save @fortawesome/react-fontawesome

function QuizBar(){
return(
    <div className="quiz-bar">
        <ul className="nav nav-pills nav-fill">
            <li className="col-sm-3 text-center">
            <div className="nav-card">
                Random
            </div>
            </li>            
        </ul>
    </div>
)
}

export default QuizBar;