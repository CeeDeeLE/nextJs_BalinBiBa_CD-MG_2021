import { useState } from "react";

export default function LiItem({question,intPlace}) {
    const [anwser, setAnwser] = useState(null);
    let isCorrect;

    // if it gets more complicated i will use a switch
    if(anwser === null){
        isCorrect = null
    }else if(anwser.xid===intPlace.xid){
        isCorrect = true
    }else{
        isCorrect = false
    }  
    
    console.log(isCorrect)

    return (
        <div className='questionButton'>
            <button className={isCorrect? 'correct':isCorrect===false ?'wrong': '' } onClick={() => setAnwser(question)}>{question.name}</button>
        </div>
    )
}
