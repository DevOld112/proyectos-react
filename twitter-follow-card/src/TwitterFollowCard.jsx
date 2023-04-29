import { useState } from "react" 

export function TwitterFollowCard ({ children, userName, }){
    const [isFollowing, setIsFollowing] = useState(false);


    const text = isFollowing? 'Siguiendo' : 'Seguir'
    const butttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar'
                alt="Avatar Del Empatico" 
                src= {`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span
                    className='tw-followCard-infoUserName'> @{userName}</span>
                </div>
            </header>
            <aside>
                <button className= {butttonClassName} onClick={handleClick} >
                    {text}
                </button>
            </aside>
        </article>
    )
}