import React from 'react'
import Popup from 'reactjs-popup'
const Results = ({finished, setFinished, winner}) => {
    console.log('hehe')
    return (<Popup open={finished} onClose={() => setFinished(false)} closeOnDocumentClick closeOnEscape>
         <div className="popup-container">
            {winner} won!!!
         </div>
    </Popup>)
}

export default Results