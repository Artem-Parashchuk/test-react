import s from './Counter.module.css'
export const Counter = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.content}>
            <p className={s.count}>
10
            </p>
            <input type="number" className={s.input}/>

            <div className={s.btn_block}>
                <button className={s.btn}>Minus</button>
                <button className={s.btn}>Reset</button>
                <button className={s.btn}>Plus</button>
            </div>
        </div>
    </div>
  )
}
