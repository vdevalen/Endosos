import { useState } from 'react';
import { Button, TextField, Box, Grid, MenuItem, Select, FormHelperText} from '@mui/material';
import PropTypes from 'prop-types';


const FormSolicitud = ({cancelRequest, saveRequest}) => {
    const [countPeople, setCountPeople] = useState(1)
    const handleChangeCountePeople= (event) => {
        setCountPeople(event.target.value)
      };

    return (
        <Box>
            <Grid container sx={{ backgroundColor: '#e8ebee',  border: '21px solid #e8ebee', borderRadius: '20px', justifyContent:"center", alignItems:"center"}}>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    required
                    helperText="Edificio, conjunto, unidad residencial o urbanización"
                    id="Ed"
                    label="Nombre de la copropiedad"
                    icon="AccessAlarm"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    required
                    sx={{ width:'90%'}}
                    helperText="Dirección copropiedad"
                    id="Ed"
                    label="Dirección copropiedad"
                    />
                </Grid>
                <Grid  sx={{ mt:4}}  item xs={4}>
                <Select
                    labelId="demo-select-small"
                        sx={{ width:'90%'}}
                        value={countPeople}
                        onChange={handleChangeCountePeople}
                    >
                        <MenuItem  value={1}>1</MenuItem>
                        <MenuItem  value={2}>2</MenuItem>
                        <MenuItem  value={3}>3</MenuItem>
                    </Select>
                    <FormHelperText>Cantidad de propietarios</FormHelperText>
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'83%'}}
                    required
                    helperText="Nombre del titular de la propiedad"
                    id="Nt"
                    label="Nombre del titular"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'90%'}}
                    required
                    helperText="Cédula del titular de la propiedad"
                    id="cc" 
                    type="number" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    label="Cédula del titular"
                    />
                </Grid>
        {
            countPeople > 1 &&
            <>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'90%'}}
                    required
                    helperText="Nombre del titular de la propiedad"
                    id="Nt"
                    label="Nombre del titular 2"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'83%'}}
                    required
                    helperText="Cédula del titular de la propiedad"
                    id="cc" 
                    type="number" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    label="Cédula del titular 2"
                    />
                </Grid>
            </>

}
{
    countPeople > 2 &&
            <>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'90%'}}
                    required
                    helperText="Nombre del titular de la propiedad"
                    id="Nt"
                    label="Nombre del titular 3"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'83%'}}
                    required
                    helperText="Cédula del titular de la propiedad"
                    id="cc" 
                    type="number" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    label="Cédula del titular 3"
                    />
                </Grid>
            </>
}
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'90%'}}
                    required
                    helperText="Ingrese el número del apartamento o casa"
                    id="ncoa" 
                    type="number" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    label="Número del apartamento o casa"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'83%'}}
                    helperText="Ingrese el número de la torre o la etapa (opcional)"
                    id="toe" 
                    label="Número de la torre o la etapa (opcional)"
                    />
                    </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'90%'}}
                    helperText="Ingrese el número del parqueadero (opcional)"
                    id="ndp" 
                    type="number" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    label="Número de parqueadero (opcional)"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'90%'}}
                    helperText="Ingrese el número del cuarto útil (opcional)"
                    id="ndcu" 
                    type="number" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    label="Número del cuarto útil (opcional)"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'83%'}}
                    required
                    helperText="Ingrese el porcentaje correspondiente"
                    id="coef" 
                    type="number"
                    label="Coeficiente %"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'90%'}}
                    required
                    helperText="Nombre de la entidad financiera"
                    id="Ndef"
                    label="Nombre de la entidad financiera"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                     sx={{ width:'90%'}}
                    required
                    helperText="Ingrese el nit de la entidad financiera"
                    id="Nef" 
                    type="number" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    label="Nit de la entidad financiera"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'83%'}}
                    required
                    helperText="Ingrese el valor comercial por el banco o entidad"
                    id="Vc" 
                    type="number" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    label="Valor comercial por el banco o entidad"
                    />
                    </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'90%'}}
                    required
                    helperText="Ingrese el número celular"
                    id="Nc" 
                    type="number" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    label="Número celular"
                    />
                </Grid>
                <Grid  sx={{ mt:4 }}  item xs={4}>
                    <TextField
                    sx={{ width:'90%'}}
                    required
                    helperText="Ingrese el correo personal"
                    id="Cp" 
                    type="Email" 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} 
                    label="Correo personal"
                    />
                    </Grid>

                <Grid  sx={{ mt:4 }}  item xs={12}>
                    <Button onClick={cancelRequest} sx={{ mr:2 }} variant="outlined" color="error" >
                        Cancelar
                    </Button >
                    <Button onClick={saveRequest} variant="outlined" color="secondary" >
                        Crear solicitud
                    </Button >
                </Grid>
            </Grid>
        </Box>
	);
}

FormSolicitud.propTypes = {
    cancelRequest: PropTypes.bool,
    saveRequest: PropTypes.number,
  };

export default FormSolicitud;