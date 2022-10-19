import errorImage from '../../img/no_results_found.png';
import style from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={style.wrapper}>
      <img src={errorImage} width="450" alt="error"></img>
    </div>
  );
}