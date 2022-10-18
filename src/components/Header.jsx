import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { ThemeSwitcher } from '../features/theme/ThemeSwitcher';
import { useReset } from './../features/controls/use-reset';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;


export const Header = () => {
  const onResetControls = useReset();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={onResetControls}>Where is the world?</Title>
          <ThemeSwitcher/>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
