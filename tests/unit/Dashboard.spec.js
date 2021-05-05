import { render, fireEvent, waitForElementToBeRemoved, getAllByRole } from '@testing-library/vue';
import Dashboard from '@/components/dashboard/Dashboard.vue';
import actions from '@/store/actions';
import mutations from '@/store/mutations';
import state from '@/store/state';

describe('Dashboard', () => {
  it('should fetch data from api', async () => {
    const { getAllByRole, getByRole, getByText } = render(Dashboard, { store: {
      actions: { ...actions },
      mutations: { ...mutations },
      state: {...state},
    } });

    expect(getByText('No data loaded!')).toBeInTheDocument();

    await waitForElementToBeRemoved(getByText('No data loaded!'))

    const rows = getAllByRole('row');
    expect(rows.length).toEqual(3);

    const secondPageButton = getByRole('button', { name: 'Page 2.' });
    expect(secondPageButton.classList.contains('is-current')).toBeFalsy();

    await fireEvent.click(secondPageButton);
    expect(secondPageButton.classList.contains('is-current')).toBeTruthy();
  })
});
