import { Box, IconButton, Stack } from '@mui/material'
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px"
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          fontWeight: "bold",
          fontSize: "6vh"
        }}
      >To-Do LISTS</Stack>
      <IconButton onClick={null} size='large' color='primary'><NoteAddOutlinedIcon fontSize='large'/></IconButton>
    </Box>
  );
}

export default App;
