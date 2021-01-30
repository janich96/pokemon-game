import s from './style.module.css';
import bg1 from '../../../src/assets/images/bg1.jpg';
import bg3 from '../../../src/assets/images/bg3.jpg';


const Layout = ({id, title, descr, urlBg1, urlBg3}) => {
  function bgImage() {
    if (urlBg1) {
      return bg1;
    } else if (urlBg3) {
      return bg3;
    } else {
      return null;
    }
  }

  return (
    <section className={s.root} id={id} style={{backgroundColor: 'yellow'}}>
      <div className={s.wrapper} style={{backgroundImage: `url(${bgImage()})`}}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={s.descr}>
            <p>{descr}</p>
          </div>
        </article>
    </div>
    </section>
  );
}

export default Layout;
