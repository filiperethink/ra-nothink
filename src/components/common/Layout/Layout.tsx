import { Outlet } from 'react-router-dom';
import RequireAuth from '../../../services/auth/Auth';
import Header from '../Header/Header';


// Components
import Wrapper from '../Wrapper/Wrapper';

const Layout = () => {

    return (
        <RequireAuth>
            <>
                <Header />

                <Wrapper>
                    <Outlet />
                </Wrapper>

            </>
        </RequireAuth>
    )
}

export default Layout