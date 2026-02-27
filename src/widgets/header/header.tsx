import { ROUTE_PATH } from '@shared/constants/path';
import { NavLink } from 'react-router-dom';

import * as styles from './header.css';

const NAV_ITEMS = [
  // todo: 랜딩페이지 추가
  { to: ROUTE_PATH.POSTS, label: '공고 모아보기' },
  { to: ROUTE_PATH.MEMBERS, label: '팀원 모아보기' },
  { to: ROUTE_PATH.RECOMMEND, label: '팀원 추천받기' },
  { to: ROUTE_PATH.MY_PROFILE, label: '마이페이지' },
];

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>UniON</div>
      <div className={styles.navContainer}>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => styles.navItem({ active: isActive })}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
