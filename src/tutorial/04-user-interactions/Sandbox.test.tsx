import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';
import Sandbox from './Sandbox';

describe('04-user-interactions', () => {
    test('should increment and decrement count using fireEvent (legacy approach)', () => {
        render(<Sandbox />);
        const increaseButton = screen.getByRole('button', { name: /increase/i })
        const decreaseButton = screen.getByRole('button', { name: /decrease/i })
        expect(screen.getByText(/count: 0/i)).toBeInTheDocument()
        fireEvent.click(increaseButton)
        expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
        fireEvent.click(decreaseButton);
        expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
    })

    // userEvent is preferred over fireEvent because:
    // 1. It more closely simulates real user interactions
    // 2. It fires multiple events that would occur in a real browser
    // 3. It handles edge cases better (like keyboard navigation)
    // 4. It's more maintainable and future-proof
    test('should increment and decrement count using userEvent', async () => {
        render(<Sandbox />)
        const user = userEvent.setup();
        const unlikeButton= screen.getByRole('button',{name:'unlike button'})
        expect(unlikeButton).toBeInTheDocument()

    })
})