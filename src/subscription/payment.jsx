import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Grid, Col } from '@mantine/core';


const PaymentForm = () => {
  const form = useForm({
    initialValues: {
      nameOnCard: '',
      cardNumber: '',
      expiration: '',
      cvc: '',
      country: '',
    },
    validationRules: {
      nameOnCard: [{ required: true, message: 'Please enter the name on the credit card' }],
      cardNumber: [
        { required: true, message: 'Please enter the credit card number' },
        { regex: /^\d{16}$/, message: 'Please enter a valid 16-digit credit card number' },
      ],
      expiration: [
        { required: true, message: 'Please enter the expiration date' },
        { regex: /^(0[1-9]|1[0-2])\/\d{2}$/, message: 'Please enter a valid expiration date (MM/YY)' },
      ],
      cvc: [
        { required: true, message: 'Please enter the CVC' },
        { regex: /^\d{3}$/, message: 'Please enter a valid 3-digit CVC' },
      ],
      country: [{ required: true, message: 'Please enter the country' }],
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.isValid) {
      console.log(form.values);
      // You can perform further processing or send the form data to a server here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid gutter="md">
        <Col span={12} sm={6}>
          <TextInput
            label="Name on Credit Card"
            required
            value={form.values.nameOnCard}
            onChange={(event) => form.setFieldValue('nameOnCard', event.target.value)}
            error={form.errors.nameOnCard && form.touched.nameOnCard}
            errorLabel={form.errors.nameOnCard && form.errors.nameOnCard[0]}
          />
        </Col>
        <Col span={12} sm={6}>
          <TextInput
            label="Credit Card Number"
            required
            value={form.values.cardNumber}
            onChange={(event) => form.setFieldValue('cardNumber', event.target.value)}
            error={form.errors.cardNumber && form.touched.cardNumber}
            errorLabel={form.errors.cardNumber && form.errors.cardNumber[0]}
          />
        </Col>
        <Col span={12} sm={6}>
          <TextInput
            label="Expiration"
            required
            value={form.values.expiration}
            onChange={(event) => form.setFieldValue('expiration', event.target.value)}
            error={form.errors.expiration && form.touched.expiration}
            errorLabel={form.errors.expiration && form.errors.expiration[0]}
          />
        </Col>
        <Col span={12} sm={6}>
          <TextInput
            label="CVC"
            required
            value={form.values.cvc}
            onChange={(event) => form.setFieldValue('cvc', event.target.value)}
            error={form.errors.cvc && form.touched.cvc}
            errorLabel={form.errors.cvc && form.errors.cvc[0]}
          />
        </Col>
        <Col span={12}>
          <TextInput
            label="Country"
            required
            value={form.values.country}
            onChange={(event) => form.setFieldValue('country', event.target.value)}
            error={form.errors.country && form.touched.country}
            errorLabel={form.errors.country && form.errors.country[0]}
          />
        </Col>
      </Grid>

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default PaymentForm;
