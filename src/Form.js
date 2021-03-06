import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CustomForm = () => {
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('Required field!').min(2, 'At least 2 characters'),
                email: Yup.string().email('Wrong format'),
                amount: Yup.number().required('Amount is required').min(2, 'At least 2'),
                currency: Yup.string().required('Select the currency'),
                text: Yup.string().min(5, 'At least 5 characters'),
                terms: Yup.boolean().required('Required field!').oneOf([true], 'Consent is required!')
            })}
            onSubmit={(values, { resetForm }) => {
                console.log(JSON.stringify(values, null, 2));
                resetForm()
            }}
        >
            <Form className="form">
                <h2>Send a donate</h2>
                <label htmlFor="name">Your name</label>
                <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <ErrorMessage className="error" name="name" component="div"/>
                <label htmlFor="email">Your email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                />
                <ErrorMessage className="error" name="email" component="div"/>
                <label htmlFor="amount">Amount</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                />
                <ErrorMessage className="error" name="amount" component="div"/>
                <label htmlFor="currency">Currency</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select"
                >
                        <option value="">Select the Currency</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name="currency" component="div"/>
                <label htmlFor="text">Your message</label>
                <Field 
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className="error" name="text" component="div"/>
                <label className="checkbox">
                    <Field name="terms" type="checkbox" />
                    Do you agree to the privacy policy?
                </label>
                <ErrorMessage className="error" name="terms" component="div"/>
                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;