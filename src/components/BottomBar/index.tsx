import React from 'react';
import './BottomBar.scss';
import { RcButton} from '@ringcentral/juno';

function BottomBar() {
  return (
    <div className="BottomBar locked">
<RcButton>Button 1</RcButton>
<RcButton>Button 2</RcButton>
<RcButton>Button 3</RcButton>
    </div>
  );
}

export default BottomBar;
