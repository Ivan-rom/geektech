import styles from './simpleForm.module.css'
import { useState } from 'react'

function SimpleForm() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [graduated, setGraduated] = useState(false)


    return (
        <div className={styles.container}>
            <form className={styles.studentForm}>
                <label> Имя:
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        name="firstName"
                        placeholder="Введите имя студента"/>
                </label>
                <label> Возраст:
                    <input
                        onChange={(e) => setAge(e.target.value)}
                        type="number"
                        name="age" min={1} max={120} />
                </label>
                <label>Закончил(а) курсы: 
                    <input
                        onChange={(e) => setGraduated(e.target.checked)}
                        type="checkbox" 
                        name="grad"/>
                </label>
            </form>
            <div className="profile">
                <div>Имя: {name}</div>
                <div>Возраст: {age}</div>
                <div>Закончил(а) курсы: {graduated ? 'да' : 'нет'}</div>
            </div>
        </div>
    )
}

export default SimpleForm;