import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AirIcon from '@mui/icons-material/Air';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';



export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Главный экран" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AirIcon/>
      </ListItemIcon>
      <ListItemText primary="Климат" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EmojiObjectsIcon />
      </ListItemIcon>
      <ListItemText primary="Освещение" />
    </ListItem>
  </div>
);

