import styles from './home.module.css'
import { Link, Outlet } from 'react-router-dom'


const Home = () => {

    /*const text=['let\'s do it','Make it happen']
    const [txt,setTxt] = useState('Make it happen')
    const [x,setX] = useState(0)
        setInterval(()=>{
            setTxt(text[x])
            setX(x + 1)
            if( x >= (text.length - 1) ){ setX(0)
            }
        },3000)*/

return (
    <section className={styles.container}>
        <div className={styles.landingpage}>
            <h1>Make it happen</h1>
        </div>

        <section className={styles.conent}>
    <div className={styles.btns}>
        <Link to=''>ZARA</Link>
        <Link to='2'>Calvin Klein</Link>
        <Link to='3'>GUESS</Link>
    </div>
    <Outlet/>
    </section>
    </section>
            )
}

export default Home