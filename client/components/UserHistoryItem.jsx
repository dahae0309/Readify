import React from 'react'

function UserHistoryItem(props){

    return(
        
        <div className = 'UserHistoryItem' class='flex flex-row justify-between my-10 py-5 px-10 border-2 border-solid border-primary rounded-lg'> 
        <div className='left'>
            <div className = 'bookTitle'> <span>Title: </span>{props.bookTitle}</div>
            <div className = 'author'> <span>Author:</span>{props.author}</div>
        </div>
            <div className='right'>
                <div className='userChoices'>
                 <div className = 'isInstrumental'><span>Instrumental: </span>{props.isInstrumental}</div>
                <div className = 'playlistLength'> <span>Playlist Length:</span>{props.playlistLength}</div>
                </div>
                <div className ='playButton'>PLAY ▷</div>


            </div>
           


        </div>
    )
}

export default UserHistoryItem;