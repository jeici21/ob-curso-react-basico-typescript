import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Home, Settings } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";

interface ListItemProps { text: string, path: string, icon: 'HOME' | 'TASKS' | 'SETTINGS', list: [] }

const getIcon = ({ icon }: ListItemProps) => {
    switch (icon) {
        case 'HOME': return (<Home />)
        case 'TASKS': return (<Home />)
        case 'SETTINGS': return (<Settings />)
        default: return (<Home />)
    }
}

const MenuListItems = ({ list }: ListItemProps) => {
    const navigate = useNavigate();
    const navigateTo = (path: string) => navigate(path)

    return (
        <List>
            {list.map(({ text, path, icon }, index) => (
                <ListItem key={index} component='button' onClick={() => navigateTo(path)}>
                    <ListItemIcon>{getIcon(icon)}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            ))}
        </List>
    )
}

export default MenuListItems