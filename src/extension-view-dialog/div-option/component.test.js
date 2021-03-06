import { setupShallowTest } from '../../tests/enzyme-util/shallow';
import { DivOption } from './component';

describe('<DivOption />', () => {
  const setupShallow = setupShallowTest(DivOption, () => ({
    img: 'test.png',
    name: 'test',
    value: 'test',
    onChange: jest.fn(),
    checked: false,
  }));

  it('renders correctly', () => {
    const { wrapper } = setupShallow();
    expect(wrapper).toMatchSnapshot();
  });
});
