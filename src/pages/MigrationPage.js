import { Helmet } from 'react-helmet-async';

import { Button, Stack, Box, Grid, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';


 

 export default function MigrationPage() {
    return (
      <>
       <Helmet>
        <title>Migrar información</title>
      </Helmet>

      <Stack >
          <Typography variant="h4" gutterBottom>
            Migrar información
          </Typography>
      </Stack>
      <Box>

        <Grid container sx={{ backgroundColor: '#e8ebee',  border: '21px solid #e8ebee', borderRadius: '20px', justifyContent:"center", alignItems:"center"}} >
                 <Grid sx={{ mt:4 }}  item xs={12}>
                 <Button variant="contained" component="label">
                 Seleccionar documento
                     <input hidden accept="*" multiple type="file" />
                </Button>     
                </Grid>
                    <Grid  sx={{ mt:4 }}  item xs={12}>
                        <Button sx={{ mr:2 }} variant="outlined" color="success" startIcon={<Iconify icon="material-symbols:send-time-extension-outline-sharp" />} >
                            Subir información
                        </Button >
                        <Button variant="outlined" color="error" startIcon={<Iconify icon="ic:round-cancel-schedule-send" />} >
                            Cancelar
                        </Button >
                    </Grid>
                </Grid>
      </Box>
      </>
    );
  }
  