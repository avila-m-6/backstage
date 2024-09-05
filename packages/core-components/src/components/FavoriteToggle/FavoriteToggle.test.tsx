/*
 * Copyright 2024 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { render } from '@testing-library/react';
import { FavoriteToggle, FavoriteToggleProps } from './FavoriteToggle';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('<FavoriteToggle />', () => {
  const onToggle = jest.fn();

  const props: FavoriteToggleProps = {
    title: 'Favorite this thing',
    id: 'some-thing-favorite',
    onToggle,
    isFavorite: true,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with valid props', async () => {
    const { getByRole } = render(<FavoriteToggle {...props} />);

    expect(getByRole('button', { name: props.title })).toBeInTheDocument();
  });

  it('should return inverted value on toggle', async () => {
    const { getByRole } = render(<FavoriteToggle {...props} />);

    await userEvent.click(getByRole('button', { name: props.title }));
    expect(onToggle).toHaveBeenCalledWith(!props.isFavorite);
  });

  it('should show accessible tooltip', async () => {
    const { findByRole, getByRole } = render(<FavoriteToggle {...props} />);

    await userEvent.hover(getByRole('button', { name: props.title }));

    expect(await findByRole('tooltip')).toHaveTextContent(props.title);
  });
});
