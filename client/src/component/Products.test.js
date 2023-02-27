// import { render, screen } from "@testing-library/react";
// import Products from "./Products";
// import { getMockStripeProduct } from '../mocks/handlers';

beforeAll(() => {
  jest.spyOn(window, 'fetch');
});

describe('getProducts', () => {
  test.todo('should make a fetch request to get the products from the product API', async () => {
   
  });
});
describe("Products", () => {
  test.todo("Renders a list of products", () => {
    // render();
    // expect(screen.getAllByRole("")).toBe("");
  });
  test.todo("WHEN there is no product nothing is displayed on page", () => {
    // const products = [];
    // render();
    // expect(screen.queryAllByRole("")).toStrictEqual([]);
  });
  test.todo("Displays one product", () => {
 
    // render(<Products getMockStripeProduct={getMockStripeProduct} />);
    // expect(screen.getAllByRole("")).toBe("");
  });
});

