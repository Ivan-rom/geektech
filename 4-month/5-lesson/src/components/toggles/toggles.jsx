import styles from './toggles.module.css'
import { useState } from 'react'


function Toggles() {
    const [showText, setShowText] = useState(true)

    return (
            <div className={styles.container}>
                <div>
                    <button 
                        onClick={(e) => setShowText(!showText)}>
                            Скрыть текст
                    </button>
                    { showText ? 
                        <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus minima ipsam magnam consequatur! Dolorum quas laboriosam, inventore optio voluptas eos.</p> 
                        : null 
                    }
                    <p className={showText ? 'block' : 'hidden'}>Lorem 2</p>
                </div>
            </div>

    )
}

export default Toggles;