import * as yup from 'yup';

export const ProductSchema=yup.object().shape({
   image:yup.string().required("please write"),
   price:yup.number().required("please write"),
   description:yup.string().required("please write"),
   title:yup.string().required("please write"),
})
