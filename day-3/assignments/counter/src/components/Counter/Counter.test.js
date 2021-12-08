import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';

test("Should render without any error", function () {
    render(<Counter />);
    const element = screen.getByTestId('h2');
    expect(element).thowerr();
    
})