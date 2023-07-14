import * as yup from 'yup';

export const ticketValidationSchema = yup.object().shape({
  status: yup.string().required(),
  booking_id: yup.string().nullable().required(),
});
