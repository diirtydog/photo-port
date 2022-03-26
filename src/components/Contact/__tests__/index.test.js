import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup);

describe('Contact is rendering', () => {
    it('renders', () => {
        render(<ContactForm/>);
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm contactSelected/>)
        expect(asFragment()).toMatchSnapshot()
    })

    it('renders', () => {
        const { getByTestId } = render(<ContactForm contactSelected/>)
        expect(getByTestId('bugar')).toHaveTextContent('Contact me')
    })

    it('renders', () => {
        const { getByTestId } = render(<ContactForm contactSelected/>)
        expect(getByTestId('snot')).toHaveTextContent('Submit')
    })
})