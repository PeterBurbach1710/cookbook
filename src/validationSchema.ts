import * as Yup from 'yup';

Yup.setLocale({
    mixed: {
        required: 'Pflichtfeld bitte einen Wert eingeben',
        notType: 'Bitte den Korrekten Datentyp eingeben',

    },
    number: {
        moreThan: 'Bitte eine Zahl größer als 0 eingeben',
    }
})

const validationSchema = Yup.object().shape({
    title: Yup.string().required('Bitte einen Titel eingeben'),
    ingredient1amount: Yup.number().moreThan(0),
    ingredient2amount: Yup.number().moreThan(0),
    ingredient3amount: Yup.number().moreThan(0),
});

export default validationSchema;