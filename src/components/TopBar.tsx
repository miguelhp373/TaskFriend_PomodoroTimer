import { MdHelp } from 'react-icons/md'
import { Switch } from '@material-ui/core';

import topbarStyles from '../styles/components/topbar.module.css'
//https://material-ui.com/pt/api/switch/#switch-api


export default function TopBar(){
    return(
        <div className={topbarStyles.topBar}>

        <div className={topbarStyles.buttonHelp}>
          <button><MdHelp /> &nbsp; Help</button>
        </div>

        <div className={topbarStyles.progressBarAlign}>
          <span>Progress - 50%</span>
          <div className={topbarStyles.progressBar}>
            <div className={topbarStyles.progress} />
          </div>
        </div>

        <div className={topbarStyles.themeMode}>
          <div className={topbarStyles.switchButton}>
          <Switch color='default'/>
          </div>
          <span>Light Mode</span>
        </div>

      </div>
    )
}