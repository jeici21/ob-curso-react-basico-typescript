//Material UI Components
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Copyright = () => {
    return (
        <Typography variant='body2' color='GrayText' align='center'>
            {'Copyright \u00a9 '}
            <Link color="inherit" href='https://imaginaformacion.com'>
                Imagina Formación
            </Link>
            {' '}
            {new Date().getFullYear()}
        </Typography>
    )
}

export default Copyright