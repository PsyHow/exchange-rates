import { ReactElement } from 'react';

import style from './App.module.scss';

import { ValuteList } from 'components/ValuteList/ValuteList';

const App = (): ReactElement => (
  <div className={style.app}>
    <ValuteList />
  </div>
);

export default App;
