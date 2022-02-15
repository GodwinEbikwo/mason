import s from "./h.module.css";

export default function Header() {
  return (
    <header className={s.root}>
      <div className={s.navMobileRoot}>
        <nav className={s.navMobileContainer}>
          <h1 className={s.headertitle}>Mason Concepts</h1>

          <div className={s.navFunctions}>
            <span>Cart</span>
            <span>Menu</span>
          </div>
        </nav>
      </div>

      <nav className={s.content}>
        <div className={s.first}>
          <p>
            Meet the familes of the authentic Mid century Icons reused by Mason
            concepts
          </p>
        </div>

        <div className={s.second}>
          <span className={s.collectionTitle}>shop</span>
          <ul className={s.collectionList}>
            <li>
              <a className="link link--metis">Arm chair</a>
            </li>
            <li>
              <a className="link link--metis">Benches</a>
            </li>
            <li>
              <a className="link link--metis">Chairs</a>
            </li>
            <li>
              <a className="link link--metis">Foot rests</a>
            </li>
          </ul>
        </div>

        <div className={s.second}>
          <span className={s.collectionTitle}>About us</span>
          <ul className={s.collectionList}>
            <li>Story</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className={s.last}>
          <span>Cart(0)</span>
        </div>

        <div className={s.bottom}>
          <span>Login</span>
          <span>Favourites</span>
        </div>
      </nav>
    </header>
  );
}
