import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
// @mui
import { Button, Stack, Typography, MenuItem, Select, Grid,  Box, FormHelperText} from '@mui/material';
// components
import Iconify from '../components/iconify';


// ----------------------------------------------------------------------

export default function DescargaPage() {
  
  const [aseguradora, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Descargar información</title>
      </Helmet>

      <Stack >
          <Typography variant="h4" gutterBottom>
            Descargar información
          </Typography>
      </Stack>
      <Box>

        <Grid container sx={{ backgroundColor: '#e8ebee',  border: '21px solid #e8ebee', borderRadius: '20px', justifyContent:"center", alignItems:"center"}} >

              <Grid  sx={{ mt:4 }}  item xs={6}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="aseguradora-select"
                    value={aseguradora}
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>SURA</MenuItem>
                    <MenuItem value={1}>VILLEGAS SEGUROS</MenuItem>
                    <MenuItem value={2}>LIBERTY</MenuItem>
                    <MenuItem value={3}>SUFI</MenuItem>
                    <MenuItem value={4}>SEGUROS BOLIVAR</MenuItem>
                    <MenuItem value={5}>MUNDIAL DE SEGUROS</MenuItem>
                  </Select>
                  <FormHelperText>Aseguradora</FormHelperText>
              </Grid>
              <Grid  sx={{ mt:8 }}  item xs={6}>
                <Select
                  labelId="demo-simple-select-label"
                  id="copropiedad-select"
                  value={aseguradora}
                  label="Aseguradora"
                  onChange={handleChange}
                >
                  <MenuItem value={0}>Bulevar del alcazar</MenuItem>
                  <MenuItem value={1}>Montier apartamentos</MenuItem>
                  <MenuItem value={2}>Misioma</MenuItem>
                  <MenuItem value={3}>Lorit apartamentos</MenuItem>
                </Select>
                <FormHelperText>Copropiedad</FormHelperText>
              </Grid>
                <Grid  sx={{ mt:4 }}  item xs={12}>
                      <Button sx={{ mr:2 }} variant="outlined" color="success" startIcon={<Iconify icon="material-symbols:send-time-extension-outline-sharp" />} >
                          Descargar y enviar
                      </Button >
                      <Button variant="outlined" color="secondary" startIcon={<Iconify icon="material-symbols:cloud-download-outline" />} >
                          Descargar
                      </Button >
                  </Grid>
              </Grid>
      </Box>
    </>
  );
}
