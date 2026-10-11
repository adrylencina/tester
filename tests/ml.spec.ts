import { test, expect } from '@playwright/test';

test('Punto 16 - Crear usuario Rey - igual que Postman', async ({ request }) => {
  // Esto es lo mismo que tu POST {{base_url}}/api/users
  // con Body > raw > JSON
  const response = await request.post('https://reqres.in/api/users', {
    data: {
      "name": "Rey",
      "job": "QA Automation"
    }
  });

  // Validamos que sea 201 Created, como viste en Postman abajo
  expect(response.status()).toBe(201);

  const body = await response.json();
  
  console.log(body); // Te va a dar id: 413 como en Postman

  expect(body.name).toBe("Rey");
  expect(body.job).toBe("QA Automation");
  expect(body).toHaveProperty('id');
});