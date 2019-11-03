export const toggleDrawer = (side, open) =>  {
    return {
      type: 'MENU_TOGGLE_DRAWER',
      side,
      open
    }
  }