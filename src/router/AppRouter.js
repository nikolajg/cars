import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddCar from '../components/AddCar';
import ViewCar from '../components/ViewCar';
import EditCar from '../components/EditCar';
import CarsList from '../components/CarsList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
    const [cars, setCars] = useLocalStorage('cars', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route
                            render={(props) => (
                                <CarsList {...props} cars={cars} setCars={setCars} />
                            )}
                            path="/"
                            exact={true}
                        />
                        <Route
                            render={(props) => (
                                <AddCar {...props} cars={cars} setCars={setCars} />
                            )}
                            path="/add"
                        />
                        <Route
                            render={(props) => (
                                <EditCar {...props} cars={cars} setCars={setCars} />
                            )}
                            path="/edit/:id"
                        />
                        <Route
                            render={(props) => (
                                <ViewCar {...props} cars={cars}/>
                            )}
                            path="/view/:id"
                        />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
