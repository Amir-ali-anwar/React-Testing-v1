import { render, screen } from '@testing-library/react'
import Sandbox from './Sandbox'
import userEvent, { UserEvent } from '@testing-library/user-event'

const getElements = () => {
    const elements = {
        emailInputElement: screen.getByRole('textbox', { name: /email/i }),
        passwordInputElement: screen.getByLabelText('Password'),
        confirmPasswordInputElement: screen.getByLabelText(/confirm password/i),
        submitButton: screen.getByRole('button', { name: /submit/i }),
    }
    return elements
}

describe('Form Testing', () => {
    // Declare user variable at describe block level so it's accessible in all tests
    let user: UserEvent;

    // beforeEach runs before each test case
    // Used to set up the testing environment in a consistent state
    // This ensures each test starts with fresh DOM and user event instance
    beforeEach(() => {
        user = userEvent.setup();
        render(<Sandbox />);
    });
    test('inputs should be initially empty', () => {
        const {
            emailInputElement,
            passwordInputElement,
            confirmPasswordInputElement,
        } = getElements();
          expect(emailInputElement).toHaveValue('')
        expect(passwordInputElement).toHaveValue('')
        expect(confirmPasswordInputElement).toHaveValue('')

    })
    test("email input should have the correct type attribute",()=>{
        const emailInputEement= screen.getByLabelText(/email address/i)
        expect(emailInputEement).toHaveAttribute('type','email')
    })
    test("email input should have the correct id attribute",()=>{
        const emailInputEement= screen.getByLabelText(/email address/i)
        expect(emailInputEement).toHaveAttribute('id', 'email');
    })
})