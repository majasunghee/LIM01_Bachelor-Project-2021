/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import React from 'react';
import { render, act, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateExercises from './CreateExercises';

beforeEach(() => {
  jest.spyOn(console, 'warn').mockImplementation(() => {});
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/createexercise',
    state: {
      formSets: {
        id: 5,
        title: 'Hverdagsliv',
        description:
          'Dette er et sett som tar for seg hverdagslige aktiviteter.',
        forstaelse1: 19,
        forstaelse2: null,
        forstaelse3: null,
        forstaelse4: null,
        forstaelse5: null,
        chat1: 22,
        chat2: null,
        chat3: null,
        chat4: null,
        chat5: null,
        ryddeSetninger1: 11,
        ryddeSetninger2: null,
        ryddeSetninger3: null,
        ryddeSetninger4: null,
        ryddeSetninger5: null,
      },
      editSet: true,
    },
  }),
}));

describe('Editiing create Exercises ', () => {
  test('edit set', async () => {
    await act(async () =>
      render(
        <Router>
          <CreateExercises />
        </Router>
      )
    );

    await screen.findByText('Lagre');

    const inputTitle = screen.getByPlaceholderText('Legg til tittel...');

    expect(inputTitle.value).toBe('Hverdagsliv');
  });
});
