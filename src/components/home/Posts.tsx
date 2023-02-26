import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Posts = () => {
    return (
        <Box>
            <Box sx ={{alignItems:'center'}}>
                <Box sx = {{backgroundColor:'white', height: 'auto', width:'100%',  display : 'grid' ,paddingLeft:'10px', borderRadius:'10px'}}>
                    <Box sx={{padding: '20px'}}>
                    <Typography variant="h5" component="h2" sx={{fontFamily: "sans-serif"}}>
                        Posts
                    </Typography>
                        </Box>
                    <Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Posts;