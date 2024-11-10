
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

describe('App Component', () => {
  test('renders an image with alt text', () => {
    render(<App />);
    const image = screen.getByAltText("Maxwell's profile image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'path-to-your-image.jpg');
  });

  test('renders an About Me heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('About Me');
  });

  test('renders a biography paragraph', () => {
    render(<App />);
    const paragraph = screen.getByText('This is a brief bio about myself.');
    expect(paragraph).toBeInTheDocument();
  });

  test('renders a link to GitHub', () => {
    render(<App />);
    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/Mugendi-Maxwell');
  });

  test('renders a link to LinkedIn', () => {
    render(<App />);
    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' });
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/linkedin-username');
  });
});
