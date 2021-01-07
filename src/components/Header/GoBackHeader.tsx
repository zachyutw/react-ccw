import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledGoBackHeader = styled.div`
    flex-grow: 1;
    .menu-button {
        margin-right: 1rem;
    }
    h6.title {
        flex-grow: 1;
    }
`;

type GoBackHeaderProps = {
    title?: string;
};

const GoBackHeader = (props: GoBackHeaderProps) => {
    const { title } = props;
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    return (
        <StyledGoBackHeader>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        edge='start'
                        className='menu-button'
                        color='inherit'
                        onClick={goBack}
                        aria-label='menu'>
                        <ArrowBack />
                    </IconButton>
                    <Typography variant='h6' className='title'>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </StyledGoBackHeader>
    );
};

export default GoBackHeader;
