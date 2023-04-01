import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { LEVELS } from "../models/levels.enum";

const TareasFormik = () => {
    const valoresIniciales = {
        nombre: '', descripcion: '', completado: false, nivel: LEVELS
    }

    const esquemaRegistro = Yup.object().shape(
        {
            nombre: Yup.string().required('Escriba la tarea'),
            descripcion: Yup.string().required('Escriba la descripción de la tarea'),
            nivel: Yup.string().required('Debe seleccionar un nivel')
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'Seleccione un nivel')
        }
    )

    return (
        <Formik initialValues={valoresIniciales} validationSchema={esquemaRegistro}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(values, null, 2));
            }}>
            {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
                <Form>
                    <label htmlFor="nombre">Nombre</label>
                    <Field id="nombre" type="text" name="nombre" placeholder="Nombre de la tarea" />
                    {errors.nombre && touched.nombre && (
                        <ErrorMessage name='nombre' component='div' />
                    )}
                    <label htmlFor="descripcion">Descripción</label>
                    <Field id="descripcion" type="text" name="descripcion"
                        placeholder="Descripción de la tarea" />
                    {errors.descripcion && touched.descripcion && (
                        <ErrorMessage name='descripcion' component='div' />
                    )}
                    <select id='nivel'>
                        <option value={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                    </select>
                    {errors.nivel && touched.nivel && (
                        <ErrorMessage name='nivel' component='div' />
                    )}
                    <button type="submit">Añadir tarea</button>
                    {isSubmitting ? (<p>Registrando tarea...</p>) : null}
                </Form>
            )}
        </Formik>
    )
}

export default TareasFormik