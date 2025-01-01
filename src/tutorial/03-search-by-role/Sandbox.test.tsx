import {render,screen} from '@testing-library/react'
import Sandbox from './Sandbox'
import { logRoles } from '@testing-library/react'

describe('Sandbox Component',()=>{
    test('renders nav and  navigation links', () => {
        const { container } = render(<Sandbox />);
       expect(screen.getByRole('navigation')).toBeInTheDocument()
       logRoles(container);
        
    })
    
  test('renders headings with correct hierarchy', () => {
    render(<Sandbox />);
      expect(screen.getByRole('heading', {name:'Main Heading', level: 1 })).toBeInTheDocument()
      expect(screen.getByRole('heading', {name:'Subheading', level: 2 })).toBeInTheDocument()
  })

  test('renders image with alt text', () => {
    render(<Sandbox />);
    expect(screen.getByRole('img',{ name: /example/i })).toHaveAttribute('src','example.jpg')
  })
})