import { Helmet } from 'react-helmet-async';
// components
import { Container, Stack, Typography, Grid } from '@mui/material';
import FormSolicitud from '../components/user-components';

export default function HomePage() {

    return (
        <>
            <Helmet>
            <title>Solictar endoso</title>
            </Helmet>

            <Container>
            <Stack direction="row" alignItems="center" justifyContent="center">
            <Grid mt={6} sx={{ backgroundColor: '#e8ebee',  border: '21px solid #e8ebee', borderRadius: '20px', justifyContent:"center", alignItems:"center"}} container>
                <Grid item  mt={8} >
                <Typography variant="h4" alignItems="center">
                    Nueva solicitud
                    </Typography>
                </Grid>
                <Grid item >
                <FormSolicitud />
                </Grid>
            </Grid>
            </Stack>
         </Container>
      </>
    );
}