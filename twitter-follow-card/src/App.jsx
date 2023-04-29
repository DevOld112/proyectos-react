import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    const formatUserName = (userName) => '@${username}'
    return (
        <section className='App'>  
        <TwitterFollowCard userName ='Peraltanos'> 
            Juan Peralta
        </TwitterFollowCard>

        <TwitterFollowCard  userName ='kikobeats'>
        'Kiko Maldonado'
        </TwitterFollowCard>

        <TwitterFollowCard  userName ='elonmusk'> 
            Elon Musk
        </TwitterFollowCard>

        </section>
    )
}


