import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  status: yup.string().required(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
