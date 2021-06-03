import React from 'react';
import './MainStage.scss';
import StageArea from './StageArea';
import SideBar from './SideBar';

function MainStage() {
  return (
    <div className="MainStage locked">
<StageArea></StageArea>
<SideBar></SideBar>
    </div>
  );
}

export default MainStage;
