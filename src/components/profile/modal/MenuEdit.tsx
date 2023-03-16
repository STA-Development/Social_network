import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { deletePost } from '../../axios/api';
import { useContext } from 'react';
import { ContextValue, UserContext } from '../../../assets/context/userContext';
import { quotesType } from '../../../assets/model/model';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
type Props = {
  id: number;
};

const MenuEdit = ({ id }: Props) => {
  const { setQuotes, quotes } = useContext(UserContext) as ContextValue;
  const handleDelete = async (id: number) => {
    await deletePost(id);
    if (quotes) {
      setQuotes(quotes.filter((quote: quotesType) => quote.id !== id));
    }
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: 'black' }} />
      </Button>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <EditIcon sx={{ paddingRight: '5px' }} />
          Edit Post
        </MenuItem>
        <MenuItem onClick={() => handleDelete(id)}>
          <DeleteIcon sx={{ paddingRight: '5px' }} />
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};
export default MenuEdit;
