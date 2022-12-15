import { Toolbar } from "@mui/material"
import { Box } from "@mui/system"
import { Sidebar } from "../components/Sidebar"

const drawerWidth = 60;

export const DashboardLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        
        
        <Sidebar drawerWidth={ drawerWidth }/>

        <Box 
            component='main'
            sx={{ flexGrow: 1}}
        >
            { children }
        </Box>
    </Box>
  )
}
