import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Settings from "./pages/Settings";
import ConfirmAccount from "./pages/confirmAccount";
import CompleteProfile from "./pages/completeProfile";
import Selected from "./pages/Selected";
import globalStore from "./store/globalStore";
import Profile from "./pages/profile";
import Error404 from "./pages/err";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.scss";
import { observer } from "mobx-react-lite";

const App = observer(() => {
    const darkTheme = createTheme({
        palette: {
            mode: globalStore.themeMode,
            
        },
        cssVariables: {
            colorSchemeSelector: 'class'
        },
        breakpoints: {
            values: {
                xxs: 0, // small phone
                xs: 300, // phone
                sm: 600, // tablets
                md: 900, // small laptop
                lg: 1200, // desktop
                xl: 1536, // large screens
            },
        },
    });

    console.log(globalStore.theme);
    React.useEffect(() => {
        const refreshToken = () => {
            if (localStorage.getItem("accessToken")) {
                let data = new FormData();
                data.append(
                    "refresh_token",
                    localStorage.getItem("refreshToken")
                );

                let config = {
                    method: "post",
                    maxBodyLength: Infinity,
                    url: "https://api.amanatstore.com/doorway/refresh_tokens/",
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${localStorage.getItem(
                            "accessToken"
                        )}`,
                    },
                    data: data,
                };

                axios
                    .request(config)
                    .then((response) => {
                        if (response.data.status !== "error") {
                            globalStore.saveAccessToken(
                                response.data.data.jwt_access_token
                            );
                            globalStore.saveRefreshToken(
                                response.data.data.jwt_refresh_token
                            );
                        } else {
                            globalStore.logout();
                            window.location.reload();
                        }
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        };

        refreshToken();
        globalStore.callRefreshFunc(refreshToken);
    }, []);

    React.useEffect(() => {
        globalStore.loadTokens();
    }, []);
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/selected" element={<Selected />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route
                        path="/confirm-account"
                        element={<ConfirmAccount />}
                    />
                    <Route
                        path="/complete-profile"
                        element={<CompleteProfile />}
                    />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
});

export default App;
