import { Grid } from  'react-loader-spinner'
import style from './Loader.module.css'

export default function Loader() {
    return (
        <div className={style.overlay}>
            <Grid
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
        </div>
    )  
}  